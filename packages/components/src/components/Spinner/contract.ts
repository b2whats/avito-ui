import { Tokens } from '../../theme'
import { MarginProperties } from '../../styled-system/'


export interface SpinnerProps extends MarginProperties {
  /** Цвет */
  color?: keyof Tokens['palette'],
  /** Размер */
  size?: number | 's' | 'm' | 'l',
  /** Толщина */
  thickness?: number,
  /** Цветовые варианты */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error',
  /** Скорость вращения */
  speed?: number,
}