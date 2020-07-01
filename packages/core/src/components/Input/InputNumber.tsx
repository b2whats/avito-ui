import React, { useState, useMemo, InputHTMLAttributes } from 'react'
import { numberFormatter } from '../../formatters'
import type { NumberFormatterSettings } from '../../formatters'
import { useIsomorphicLayoutEffect } from '../../hooks'
import { invokeAll } from '../../utils'
import { InputNumberProps } from './contract'
import { Input } from './Input'

export const InputNumber = ({ onChange = () => {}, ...props }: InputNumberProps) => {
  const outerValue = numberOrEmpty(props.value)
  // Буферизация промежуточных значений "-" или "99."
  const [stringValue, setStringValue] = useState(outerValue)
  useIsomorphicLayoutEffect(() => {
    if (!numericEquals(outerValue, stringValue)) {
      setStringValue(String(outerValue))
    }
  }, [outerValue])
  const formatter = useMemo(
    () => numberFormatter.setup(props),
    numberFormatter.settingKeys.map(k => props[k]))

  return (
    <Input
      inputMode={inputMode(formatter.settings)}
      mask={formatter}
      {...props}
      value={stringValue}
      onChange={event => {
        setStringValue(event.value || '')
        const numericValue = numberOrEmpty(event.value)
        if (!numericEquals(numericValue, outerValue)) {
          onChange({ ...event, value: numericValue })
        }
      }}
      onKeyDown={invokeAll(props.onKeyDown, e => {
        const target = e.target as HTMLInputElement
        if (e.key === 'ArrowUp') {
          onChange({ value: (outerValue || 0) + 1, target })
          e.preventDefault()
        } else if (e.key === 'ArrowDown') {
          onChange({ value: (outerValue || 0) - 1, target })
          e.preventDefault()
        }
      })}
    />
  )
}

function numberOrEmpty(v: any) {
  const numeric = Number(v)
  const isSafeCast = typeof v === 'number' || (typeof v === 'string' && v !== '')
  return isSafeCast && !Number.isNaN(numeric) ? numeric : ''
}

function numericEquals(v1: any, v2: any){
  return numberOrEmpty(v1) === numberOrEmpty(v2)
}

/**
 * Телефонная клавиатура с числами
 * https://css-tricks.com/everything-you-ever-wanted-to-know-about-inputmode/
 */
function inputMode(format: NumberFormatterSettings): InputHTMLAttributes<any>['inputMode'] {
  if (!format.positiveOnly) {
    // наличие минуса на numeric / decimal не гарантировано
    return 'text'
  }
  return format.maxFracDigits ? 'decimal' : 'numeric'
}