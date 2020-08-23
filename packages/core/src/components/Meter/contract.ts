import { StyleProperties } from '../../styled-system/'
import { CommonAttributes } from '../../utils/'

export interface MeterProps extends CommonAttributes, StyleProperties {
  /** Контент внутри */
  children?: any
  /** Размер */
  size?: 's' | 'm'
  /** Цветовые варианты */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  /** Текст заголовка */
  label?: React.ReactNode
  /** Текст подсказки */
  caption?: React.ReactNode
  /** Позиция (0-1) */
  value?: number | string
  /** Неактивное состояние */
  disabled?: boolean
  /** Изменение цвета от значения */
  dynamic?: number[]
}

