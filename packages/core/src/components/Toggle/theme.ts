import { ComponentTheme, Slot } from '../../styled-system/'
import { TextProps } from '../Text/contract'
import { IconProps } from '../Icon/contract'
import { ToggleProps } from './contract'

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