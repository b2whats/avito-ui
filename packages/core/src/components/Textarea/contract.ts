import React from 'react'
import { MarginProperties, ValignProperties } from '../../styled-system/'
import { TextareaTheme } from './theme'

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
  value?: string
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
  /** Ссылка на дом ноду */
  ref?: React.Ref<HTMLTextAreaElement>

  onClick?(event: React.MouseEvent<HTMLTextAreaElement>): void
  onChange?(event: React.ChangeEvent<HTMLTextAreaElement>): void
  onFocus?(event: React.FocusEvent<HTMLTextAreaElement>): void
  onBlur?(event: React.FocusEvent<HTMLTextAreaElement>): void
  onKeyDown?(event: React.KeyboardEvent<HTMLTextAreaElement>): void
  onMouseDown?(event: React.MouseEvent<HTMLTextAreaElement>): void
}

export interface TextareaProps extends Omit<TextareaCoreProps, 'className'>, ValignProperties, MarginProperties {
  /** Размер */
  size?: 's' | 'm' | 'l'
  /** Крестик очистки */
  clearable?: boolean | 'always'
  /** Цветовые варианты */
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  /** Инлайновое поведение */
  inline?: boolean
  /** Переопределиь тему компонента */
  override?: TextareaTheme
}
