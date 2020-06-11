import React, { useState, useEffect } from 'react'

type Props = {
  value?: null | number | string
  onChange?: (event: any) => void
}

export const useUncontrolledInputHook = (props: Props) => {
  let { value, onChange } = props

  if (!onChange) {
    const [innerValue, setValue] = useState(props.value)

    onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(event.target.value)
    }

    useEffect(() => {
      setValue(props.value)
    }, [props.value])

    value = innerValue
  }

  value = value === null || value === undefined ? '' : String(value)

  return [value, onChange] as const
}
