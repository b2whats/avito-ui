import React from 'react'
import { MarginProperties, PaddingProperties } from '../../styled-system/'
import { InputTheme } from './theme'

export enum InputPreset {}

export interface InputCoreProps extends PaddingProperties {
  /** Автоматическая ширина поля */
  autoSize?: boolean
  /** Id */
  id?: string
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
  /** Поле не может быть пустым */
  required?: boolean
  /** Read-only состояние */
  readOnly?: boolean
  /** Класс элемента */
  className?: string
  /** Ссылка на дом ноду */
  ref?: React.Ref<HTMLInputElement>

  onClick?(event: React.MouseEvent<HTMLInputElement>): void
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void
  onKeyDown?(event: React.KeyboardEvent<HTMLInputElement>): void
  onMouseDown?(event: React.MouseEvent<HTMLInputElement>): void
}

export interface InputProps extends Omit<InputCoreProps, 'className'>, MarginProperties {
  /** Размер */
  size?: 's' | 'm' | 'l'
  /** Крестик очистки */
  clearable?: boolean | 'always'
  /** Состояние загрузки */
  loading?: boolean
  /** Внешний вид компонента */
  kind: 'fill' | 'outline'
  /** Цветовые варианты */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  /** Тип текстового поля */
  type?: 'text' | 'number' | 'phone' | 'email'
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
  /** Ссылка на дом ноду */
  ref?: React.Ref<HTMLInputElement>
  /** Переопределиь тему компонента */
  override?: InputTheme
  /** пресет */
  preset?: keyof typeof InputPreset,
}
