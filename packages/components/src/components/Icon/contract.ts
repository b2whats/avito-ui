import { Tokens } from '../../theme'
import { IconProps as IconBaseProps } from '@avito/icons'
import { MarginProperties } from '../../styled-system/'


export interface IconProps extends IconBaseProps, MarginProperties {
  /** Цвет иконки */
  color?: keyof Tokens['palette'],
  /** Цвет иконки при наведении */
  colorHover?: keyof Tokens['palette'],
  /** Размер иконки */
  size: number | 's' | 'm' | 'l' | 'auto',
  /** Цветовые варианты иконок */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error',
  /** Инвертированная иконка */
  inverted?: boolean,
  /** Событие клика */
  onClick?(event: React.MouseEvent<SVGSVGElement>): void,
  /** Событие наведения */
  onMouseOver?(event: React.MouseEvent<SVGSVGElement>): void,
  /** Событие снятия мышки */
  onMouseOut?(event: React.MouseEvent<SVGSVGElement>): void,
}