import { Theme } from '@avito/core/theme/'
import { MarginProperties } from '@avito/core/styled-system/'
import { SpinnerTheme } from './theme' 

export interface SpinnerProps extends MarginProperties {
  /** Цвет */
  color?: keyof Theme['palette']
  /** Размер */
  size?: number | 's' | 'm' | 'l' | 'auto'
  /** Толщина */
  thickness?: number
  /** Цветовые варианты */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  /** Скорость вращения */
  speed?: number
  /** Переопределиь тему компонента */
  override?: SpinnerTheme
}