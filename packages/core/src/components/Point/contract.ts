import { Colors, Variant } from '../../styled-system'
import { CommonAttributes } from '../../utils'
import { BoxProps } from '../Layout'

export interface PointProps extends BoxProps, Variant, CommonAttributes {
  show?: boolean
  count?: string | number
  /* Размер  */
  size?: 's' | 'm' | 'l' | number
  pulse?: boolean

  /* Включить стандартный вырез под бейдж */
  gap?: boolean
  /* Ширина выреза */
  gapSize?: number
  /* Цвет выреза для маскировки под фон */
  gapColor?: Colors
}
