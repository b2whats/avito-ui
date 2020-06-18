import { useState, useCallback, HTMLAttributes } from 'react'
import { invokeAll } from '../utils'

type FocusProps<Element> = Pick<HTMLAttributes<Element>, 'onFocus' | 'onBlur'>

export function useFocus<Element = HTMLElement>(
  props: Partial<FocusProps<Element>>
): [boolean, FocusProps<Element>] {
  const [isFocused, setFocus] = useState(false)
  return [isFocused, {
    onFocus: useCallback(invokeAll(() => setFocus(true), props.onFocus), [props.onFocus]),
    onBlur: useCallback(invokeAll(() => setFocus(false), props.onBlur), [props.onBlur]),
  }]
}
