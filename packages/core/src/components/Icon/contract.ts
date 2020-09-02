import { StyleProperties, Variant } from '../../styled-system/'
import { CommonAttributes } from '../../utils/'

export interface BaseIconProps extends StyleProperties, Variant, CommonAttributes<SVGElement> {
  /** Имя */
  name: string
  /** Размеры конейнера с иконкой */
  viewBox: string
  /** Размер иконки */
  size?: number | 's' | 'm' | 'l' | 'xl' | 'auto'
  /** Поворот иконки */
  rotate?: number
  /** Вращение иконки */
  spin?: number | boolean
  /** Зона областии для клика */
  area?: number
  /** Добавляет тень для иконки */
  shadow?: boolean | string
  /** Состояние disabled */
  disabled?: boolean
}

export interface IconProps extends Omit<BaseIconProps, 'children' | 'name' | 'viewBox'> {}
