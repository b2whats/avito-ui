import { Slot, ComponentTheme } from '../../styled-system/'
import { IconProps } from '../Icon/contract'
import { TextProps } from '../Text/contract'
import { SwitcherProps } from './contract'

export type SwitcherTheme = ComponentTheme<SwitcherProps, {
  Toggle?: Slot,
  Switch?: Slot,
  Icon?: Slot<IconProps>,
  Label?: Slot<TextProps>,
}>

export const switcherTheme: SwitcherTheme = {
  defaultProps: {
    positionLoading: false,
  },
  scheme: {},
}
