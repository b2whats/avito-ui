import { Slot, ComponentTheme } from '../../styled-system/'
import { SwitcherProps } from './contract'
import { IconProps } from '../Icon/contract'
import { TextProps } from '../Text/contract'

export type SwitcherTheme = ComponentTheme<SwitcherProps, {
  Toggle?: Slot,
  Switch?: Slot,
  Icon?: Slot<IconProps>,
  Label?: Slot<TextProps>,
}>

export const switcherTheme: SwitcherTheme = {
  defaultProps: {
    variant: 'primary',
    size: 'm',
  },
  scheme: {},
}
