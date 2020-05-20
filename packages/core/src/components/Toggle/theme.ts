import { ComponentTheme, Slot } from '../../styled-system/'
import { ToggleProps } from './contract'
import { TextProps } from '../Text/contract'
import { IconProps } from '../Icon/contract'

export type ToggleTheme<Props = ToggleProps> = ComponentTheme<Props, {
  Toggle: Slot,
  Switch: Slot,
  Icon: Slot<IconProps>,
  Label: Slot<TextProps>,
}>

export const toggleTheme: ToggleTheme = {
  defaultProps: {
    labelPosition: 'end',
    size: 'm',
  },
  scheme: {
    Toggle: {},
    Switch: {},
    Icon: {},
    Label: {
      props: {
        size: 'm',
      },
    },
  },
}