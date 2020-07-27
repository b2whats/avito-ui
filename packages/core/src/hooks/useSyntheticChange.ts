import { useRef, ChangeEvent, useCallback } from 'react'
import { useRifm } from 'rifm'
import { Formatter } from '../formatters'
import { ChangeEventHandler } from '../utils/'

export function useSyntheticChange<Value, Element extends (HTMLInputElement | HTMLTextAreaElement)>(
  value: Value | undefined,
  onChange: ChangeEventHandler<Value, Element>,
  options?: Formatter
): [string, (event: ChangeEvent<Element>) => void] {
  const stringValue = value === null || value === undefined ? '' : String(value)
  if (!options) {
    return [
      stringValue,
      useCallback(({ target }) => onChange({ value: target.value as any, target, name: target.name }), [onChange]),
    ]
  }

  const { parse = value => value } = options
  const target = useRef<Element | null>(null)
  const rifmProps = useRifm({
    value: stringValue,
    onChange: (value: any) => onChange({ value: parse(value) as any, target: target.current! }),
    ...options,
  })
  return [
    rifmProps.value,
    event => {
      target.current = event.target
      rifmProps.onChange(event as ChangeEvent<any>)
    },
  ]
}
