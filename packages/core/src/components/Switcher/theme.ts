import { Slot, ComponentTheme } from '../../styled-system/'
import { SwitcherProps } from './contract'
import { IconProps } from '../Icon/contract'
import { TextProps } from '../Text/contract'

export type SwitcherTheme = ComponentTheme<SwitcherProps, {
  Toggle?: Slot,
  Switch?: Slot,
  Icon?: Slot<IconProps>,
  Label?: Slot<TextProps>,
}, {
  // сдвигать checked + loading вправо
  positionLoading: boolean,
}>

export const switcherTheme: SwitcherTheme = {
  positionLoading: false,
  defaultProps: {
    variant: 'primary',
    size: 'm',
  },
  scheme: {},
}
