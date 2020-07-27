import { useState, useEffect, useCallback } from 'react'
import { ChangeEventHandler } from '../utils'

type Props<Value, Element> = {
  value?: Value
  onChange?: ChangeEventHandler<Value, Element>
}

export const useUncontrolledInputHook = <Value, Element>(props: Props<Value, Element>) => {
  let { value, onChange } = props

  if (!onChange) {
    const [innerValue, setValue] = useState(props.value)

    onChange = useCallback(event => setValue(event.value), [])

    useEffect(() => {
      setValue(props.value)
    }, [props.value])

    value = innerValue
  }

  return [value, onChange] as const
}
