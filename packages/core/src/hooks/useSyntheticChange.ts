import { ChangeEventHandler, useRef, ChangeEvent } from 'react'
import { useRifm } from 'rifm'
import { ChangeHandler } from '../utils'

export type FormatterOptions = Omit<
  typeof useRifm extends (options: infer Options) => any ? Options : never,
  'value' | 'onChange'>

export function useSyntheticChange<Value, Element extends (HTMLInputElement | HTMLTextAreaElement)>(
  value: Value | undefined,
  onChange: ChangeHandler<Value, Element>,
  options?: FormatterOptions
): [string, ChangeEventHandler<Element>] {
  const stringValue = value === null || value === undefined ? '' : String(value)
  if (!options) {
    return [
      stringValue,
      ({ target }) => onChange({ value: target.value as any, target, name: target.name }),
    ]
  }

  const target = useRef<Element | null>(null)
  const rifmProps = useRifm({
    value: stringValue,
    onChange: (value: any) => onChange({ value, target: target.current! }),
    ...options,
  })
  return [
    rifmProps.value,
    e => {
      target.current = e.target
      rifmProps.onChange(e as ChangeEvent<any>)
    },
  ]
}
