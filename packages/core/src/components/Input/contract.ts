import React, { Ref, InputHTMLAttributes } from 'react'
import type { Formatter, NumberFormatterSettings } from '../../formatters'
import { MarginProperties, PaddingProperties } from '../../styled-system/'
import { ChangeHandler } from '../../utils'

export enum InputPreset {}

export interface InputCoreProps extends PaddingProperties, Pick<InputHTMLAttributes<HTMLInputElement>, 'inputMode'> {
  ref: Ref<HTMLInputElement>
  /** Автоматическая ширина поля */
  autoSize?: boolean
  /** Id */
  id?: string
  /** Имя */
  name?: string
  /** Тип */
  type?: string
  /** Значение */
  value?: string | number | null
  /** Подсказка */
  placeholder?: string
  /** Неактивное состояние */
  disabled?: boolean
  /** Поле не может быть пустым */
  required?: boolean
  /** Read-only состояние */
  readOnly?: boolean
  /** Класс элемента */
  className?: string
  deletePlaceholderOnFocus?: boolean

  onClick?(event: React.MouseEvent<HTMLInputElement>): void
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void
  onKeyDown?(event: React.KeyboardEvent<HTMLInputElement>): void
  onMouseDown?(event: React.MouseEvent<HTMLInputElement>): void
}

export interface InputProps extends Omit<InputCoreProps, 'className' | 'onChange'>, MarginProperties {
  /** Размер */
  size?: 's' | 'm' | 'l'
  /** Синтетическое изменение */
  onChange?: ChangeHandler<string | number | null, HTMLInputElement>
  /** Форматирование и маски */
  mask?: Formatter
  /** Крестик очистки */
  clearable?: boolean | 'always'
  /** Состояние загрузки */
  loading?: boolean
  /** Внешний вид компонента */
  kind: 'fill' | 'outline'
  /** Цветовые варианты */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  /** Тип текстового поля */
  type?: 'text' | 'number' | 'phone' | 'email' | 'tel'
  /** Иконка в начале */
  iconBefore?: React.ReactNode
  /** Иконка в конце */
  iconAfter?: React.ReactNode
  /** Иконка перед инпутом */
  prefix?: string | React.ReactNode
  /** Иконка после инпута */
  postfix?: string | React.ReactNode
  /** Инлайновое поведение */
  inline?: boolean
  /** пресет */
  preset?: keyof typeof InputPreset,
  renderCore?: (props: InputCoreProps) => JSX.Element
}

export interface InputNumberProps extends Omit<InputProps, 'type' | 'formatter'>, NumberFormatterSettings {}

