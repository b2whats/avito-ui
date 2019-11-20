import { Tokens } from '../../theme'
import { IconProps as IconBaseProps } from '@avito/icons'
import { SpaceProperties } from '../../styled-system/'


export interface IconProps extends IconBaseProps, SpaceProperties {
  /** Цвет иконки */
  color?: keyof Tokens['palette'],
  /** Размер иконки */
  size?: 'auto' | string,
  /** Цветовые варианты иконок */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error',
  /** Событие клика */
  onClick?(event: React.MouseEvent<SVGSVGElement>): void,
}