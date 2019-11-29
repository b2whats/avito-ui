import { Tokens } from '../../theme'
import { IconProps as IconBaseProps } from '@avito/icons'
import { SpaceProperties } from '../../styled-system/'


export interface IconProps extends IconBaseProps, SpaceProperties {
  /** Цвет иконки */
  color?: keyof Tokens['palette'],
  /** Размер иконки */
  size?: 's' | 'm' | 'l' | 'auto' | string,
  /** Цветовые варианты иконок */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error',
  /** Инвертированная иконка
   * */
  inverted?: boolean,
  /** Событие клика */
  onClick?(event: React.MouseEvent<SVGSVGElement>): void,
  /** Событие наведения */
  onMouseOver?(event: React.MouseEvent<SVGSVGElement>): void,
  /** Событие снятия мышки */
  onMouseOut?(event: React.MouseEvent<SVGSVGElement>): void,
}