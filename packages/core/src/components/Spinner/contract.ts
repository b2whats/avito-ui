import { StyleProperties } from '../../styled-system/'
import { Theme } from '../../theme/'
import { CommonAttributes } from '../../utils/'

export interface SpinnerProps extends StyleProperties, CommonAttributes<SVGElement> {
  /** Цвет */
  color?: keyof Theme['palette']
  /** Размер */
  size?: number | 's' | 'm' | 'l' | 'auto'
  /** Цветовые варианты */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  /** Скорость вращения */
  speed?: number
}
