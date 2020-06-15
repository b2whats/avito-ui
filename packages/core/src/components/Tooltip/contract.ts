import { SpaceProperties, DimensionProperties, ColorProperties, BorderProperties, LayoutProperties, TextProperties } from '../../styled-system/'
import { PositionerProps } from '../Positioner/'

type StyleProps = SpaceProperties & ColorProperties & Omit<DimensionProperties, 'minWidth' | 'width' | 'maxWidth'> & BorderProperties & LayoutProperties & TextProperties
export enum TooltipPreset {}

export interface TooltipProps extends Omit<PositionerProps, 'target' | 'targetWidth'>, StyleProps {
  /** Контент */
  content?: React.ReactNode
  /* Внешний вид */
  preset?: keyof typeof TooltipPreset
  /* Добавляет крестик закрыития */
  closable?: boolean
}
