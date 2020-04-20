import { Theme } from '../../theme/'
import { IconProps as IconBaseProps } from '@avito/icons'
import { MarginProperties } from '../../styled-system/'
import { IconTheme } from './theme'

export interface IconProps extends IconBaseProps, MarginProperties {
  /** Цвет иконки */
  color?: keyof Theme['palette'] & string
  /** Цвет иконки при наведении */
  colorHover?: keyof Theme['palette'] & string
  /** Размер иконки */
  size?: number | 's' | 'm' | 'l' | 'auto'
  /** Вращение иконки */
  spin?: number | boolean
  /** Цветовые варианты иконок */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  /** Зона областии для клика */
  area?: number
  /** Переопределиь тему компонента */
  override?: IconTheme

  onClick?(event: React.MouseEvent<Element>): void
}