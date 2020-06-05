import { ChangeEventHandler, useRef, ChangeEvent } from 'react'
import { useRifm } from 'rifm'
import { Formatter } from '../formatters'
import { ChangeHandler } from '../utils'

export function useSyntheticChange<Value, Element extends (HTMLInputElement | HTMLTextAreaElement)>(
  value: Value | undefined,
  onChange: ChangeHandler<Value, Element>,
  options?: Formatter
): [string, ChangeEventHandler<Element>] {
  const stringValue = value === null || value === undefined ? '' : String(value)
  if (!options) {
    return [
      stringValue,
      ({ target }) => onChange({ value: target.value as any, target, name: target.name }),
    ]
  }

  const { parse = v => v } = options
  const target = useRef<Element | null>(null)
  const rifmProps = useRifm({
    value: stringValue,
    onChange: (value: any) => onChange({ value: parse(value) as any, target: target.current! }),
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
