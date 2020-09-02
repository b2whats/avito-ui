import { Variant, StyleProperties } from '../../styled-system'
import { Theme } from '../../theme/'
import { CommonAttributes } from '../../utils/'

export interface SpinnerProps extends Variant, StyleProperties, CommonAttributes<SVGElement> {
  /** Цвет */
  color?: keyof Theme['palette']
  /** Размер */
  size?: number | 's' | 'm' | 'l' | 'auto'
  /** Скорость вращения */
  speed?: number
}
