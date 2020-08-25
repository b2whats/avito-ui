import React, { Ref, ChangeEvent } from 'react'
import type { Formatter, NumberFormatterSettings } from '../../formatters'
import { CommonAttributes } from '../../utils/'

export enum InputPreset {}

export interface InputCoreProps {
  ref?: Ref<HTMLInputElement>
  /** Автоматическая ширина поля */
  autoSize?: boolean
  /** Имя */
  name?: string
  /** Тип */
  type?: string
  /** Значение */
  value?: string | number
  /** Подсказка */
  placeholder?: string
  /** Неактивное состояние */
  disabled?: boolean
  /** Обязательное для заполнения поле */
  required?: boolean
  /** Read-only состояние */
  readOnly?: boolean
  /** Класс элемента */
  className?: string
  /** Элемент в фокусе при первом рендеринге */
  autoFocus?: boolean
  /** Подсказка для типа данных */
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void

  deletePlaceholderOnFocus?: boolean
}

export interface InputProps extends Omit<InputCoreProps, 'className' | 'onChange' | 'onClick'>, CommonAttributes<HTMLInputElement, string | number> {
  /** Размер */
  size?: 's' | 'm' | 'l'
  /** Форматирование и маски */
  mask?: Formatter
  /** Крестик очистки */
  clearable?: boolean | 'always'
  /** Состояние загрузки */
  loading?: boolean
  /** Внешний вид компонента */
  kind?: 'fill' | 'outline'
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
  /** Пресет */
  preset?: keyof typeof InputPreset
  renderCore?: (props: InputCoreProps) => JSX.Element
}

export interface InputNumberProps extends Omit<InputProps, 'type' | 'formatter'>, NumberFormatterSettings {}

