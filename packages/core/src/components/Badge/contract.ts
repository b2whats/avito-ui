import { ReactNode } from 'react'
import { Colors } from '../../styled-system/'
import { CommonAttributes } from '../../utils/'
import { BoxProps } from '../Layout'

export interface BadgeProps extends BoxProps, CommonAttributes {
  /* Счетчик в бейдже */
  count?: ReactNode
  /* Размер бейджа (не действует на kind='flat') */
  size?: 's' | 'm' | 'l' | number
  /* Анимация изменения счетчика */
  animateChange?: 'none' | 'slide'

  /* Не скрывать бейдж даже при count <= 0 */
  showZero?: boolean

  /* flat делает бейдж текстовым */
  kind?: 'fill' | 'flat'

  /* Включить стандартный вырез под бейдж */
  gap?: boolean
  /* Ширина выреза */
  gapSize?: number
  /* Цвет выреза для маскировки под фон */
  gapColor?: Colors
}
