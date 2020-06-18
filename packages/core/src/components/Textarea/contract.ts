import React from 'react'
import { MarginProperties, AlignProperties } from '../../styled-system/'
import { ChangeHandler } from '../../utils'

export interface TextareaCoreProps {
  /** Автоматическая высота поля */
  autoSize?: boolean
  /** Колиичество строк */
  rows?: number
  /** Максимальное колиичество строк */
  maxRows?: number
  /** Имя */
  name?: string
  /** Значение */
  value?: string | null
  /** Подсказка */
  placeholder?: string
  /** Неактивное состояние */
  disabled?: boolean
  /** Возможность изменить размер */
  resizable?: boolean
  /** Класс элемента */
  className?: string
  /** Id */
  id?: string
  /** Позиция элемента при фокусе */
  tabIndex?: number

  deletePlaceholderOnFocus?: boolean

  onClick?(event: React.MouseEvent<HTMLTextAreaElement>): void
  onChange?(event: React.ChangeEvent<HTMLTextAreaElement>): void
  onFocus?(event: React.FocusEvent<HTMLTextAreaElement>): void
  onBlur?(event: React.FocusEvent<HTMLTextAreaElement>): void
  onKeyDown?(event: React.KeyboardEvent<HTMLTextAreaElement>): void
  onMouseDown?(event: React.MouseEvent<HTMLTextAreaElement>): void
}

export interface TextareaProps extends Omit<TextareaCoreProps, 'className' | 'onChange'>, AlignProperties, MarginProperties {
  /** Размер */
  size?: 's' | 'm' | 'l'
  onChange: ChangeHandler<string | null, HTMLTextAreaElement>
  /** Крестик очистки */
  clearable?: boolean | 'always'
  /** Цветовые варианты */
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  /** Инлайновое поведение */
  inline?: boolean
}
