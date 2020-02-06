import { Tokens } from '../../theme'
import { IconProps as IconBaseProps } from '@avito/icons'
import { MarginProperties } from '../../styled-system/'
export interface IconProps extends IconBaseProps, MarginProperties {
  /** Цвет иконки */
  color?: keyof Tokens['palette'] | string,
  /** Цвет иконки при наведении */
  colorHover?: keyof Tokens['palette'] | string,
  /** Размер иконки */
  size?: number | 's' | 'm' | 'l' | 'auto',
  /** Вращение иконки */
  spin?: number | boolean,
  /** Цветовые варианты иконок */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error',
  /** Инвертированная иконка */
  inverted?: boolean,
  /** Зона областии для клика */
  area?: number,
  onClick?(event: React.MouseEvent<Element>): void,
  onMouseDown?(event: React.MouseEvent<Element>): void,
  onMouseOver?(event: React.MouseEvent<Element>): void,
  onMouseOut?(event: React.MouseEvent<Element>): void,
}