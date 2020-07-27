import React from 'react'
import { StyleProperties, FoldThemeParamsReturn } from '../../styled-system/'
import { CommonAttributes } from '../../utils/'
import { ToggleTheme } from './theme'

type ChildrenProps = {
  checked: boolean | 'mixed'
  loading?: boolean
  Icon?: FoldThemeParamsReturn<ToggleTheme>['Icon']
}

export interface ToggleProps extends StyleProperties, CommonAttributes<HTMLInputElement, string | number> {
  children?(props: ChildrenProps): React.ReactNode
  /** Размер */
  size?: 's' | 'm' | 'l'
  /** Поведение */
  mode: 'checkbox' | 'radio'
  /** Имя елемента */
  name?: string
  /** Значение елемента */
  value?: string | number
  /** Состояние елемента */
  checked?: boolean
  /** Состояние загрузки */
  loading?: boolean
  /** Неопределенное состояние елемента */
  indeterminate?: boolean
  /** Квадратная, круглая и с закругленными углами */
  shape?: 'square' | 'circle' | 'pill'
  /** Текст лейбла */
  label?: string
  /** Текст подсказки */
  description?: string
  /** Позиция лейбла */
  labelPosition?: 'start' | 'end'
  /** Цветовые варианты */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  /** Неактивное состояние */
  disabled?: boolean
  /** Класс елемента */
  className?: string
}
