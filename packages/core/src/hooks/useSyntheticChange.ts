import { ChangeEvent, ChangeEventHandler } from 'react'
import { ChangeHandler } from '../utils'

export function useSyntheticChange<Value, Element>(value: Value | undefined, onChange: ChangeHandler<Value, Element>) {
  const wrappedChange: ChangeEventHandler<Element> = ({ target }: any) => {
    onChange({ value: target.value, target, name: target.name })
  }
  return [
    value === null || value === undefined ? '' : String(value),
    wrappedChange,
  ] as const
}
