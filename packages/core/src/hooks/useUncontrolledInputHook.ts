import { useState, useEffect } from 'react'
import { ChangeHandler } from '../utils'

type Props<Value, Element> = {
  value?: Value | null
  onChange?: ChangeHandler<Value | null, Element>
}

export const useUncontrolledInputHook = <Value, Element>(props: Props<Value, Element>) => {
  let { value, onChange } = props

  if (!onChange) {
    const [innerValue, setValue] = useState(props.value)

    onChange = event => setValue(event.value)

    useEffect(() => {
      setValue(props.value)
    }, [props.value])

    value = innerValue
  }

  return [value, onChange] as const
}
