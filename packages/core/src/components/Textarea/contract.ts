import React from 'react'
import { CommonAttributes } from '../../utils/'

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
  /** Элемент в фокусе при первом рендеринге */
  autoFocus?: boolean

  deletePlaceholderOnFocus?: boolean

  onChange?(event: React.ChangeEvent<HTMLTextAreaElement>): void
  onClick?(event: React.MouseEvent<HTMLTextAreaElement>): void
}

export interface TextareaProps extends Omit<TextareaCoreProps, 'className' | 'onChange' | 'onClick'>, CommonAttributes<HTMLTextAreaElement, string> {
  /** Размер */
  size?: 's' | 'm' | 'l'
  /** Крестик очистки */
  clearable?: boolean | 'always'
  /** Цветовые варианты */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  /** Инлайновое поведение */
  inline?: boolean
}
