import { PositionerProps, PositionerTheme } from '../Positioner/'
import { SpaceProperties, DimensionProperties, ColorProperties, BorderProperties, LayoutProperties, TextProperties } from '../../styled-system/'

type StyleProps = SpaceProperties & ColorProperties & Omit<DimensionProperties, 'minWidth' | 'width' | 'maxWidth'> & BorderProperties & LayoutProperties & TextProperties
export enum TooltipPreset {}

export interface TooltipProps extends Omit<PositionerProps, 'target' | 'targetWidth'>, StyleProps {
  /** Контент */
  content?: React.ReactNode
  /** Ширина */
  width?: 'reference' | number
  /** Минимальная ширина */
  minWidth?: 'reference' | number
  /** Максимальная ширина */
  maxWidth?: 'reference' | number
  /* Внешний вид */
  preset?: keyof typeof TooltipPreset
  /* Добавляет крестик закрыития */
  closeIcon?: boolean
  /* Переопределиь тему компонента */
  override?: PositionerTheme
}