import { Theme, Tokens } from '../../theme/'
import { IconProps as IconBaseProps } from '@avito/icons'
import { Spaces } from '../../styled-system/'

export interface IconProps extends IconBaseProps, Spaces {
  /** Цвет иконки */
  color?: keyof Theme['palette'],
  /** Размер иконки */
  size?: 's' | 'm' | 'l' | string,
  /** Цветовые варианты иконок */
  variant?: keyof Tokens['variants'],
  /** Событие клика */
  onClick?(event: React.MouseEvent<SVGSVGElement>): void,
  /** @ignore */
  theme?: Theme,
}