import { RadioCheckedIcon } from '../Icon/'
import { Slot, ComponentTheme } from '../../styled-system/'
import { RadioProps } from './contract'
import { IconProps } from '../Icon/contract'
import { TextProps } from '../Text/contract'

export type RadioTheme = ComponentTheme<RadioProps, {
  Toggle?: Slot,
  Switch?: Slot,
  Icon?: Slot<IconProps>,
  Label?: Slot<TextProps>,
}>

export const radioTheme: RadioTheme = {
  defaultProps: {
    variant: 'primary',
    size: 'm',
    shape: 'circle',
  },
  scheme: {
    Switch: {
      style: {
        color: 'white',
        bgDisabled: 'gray4',
      },
    },
    Icon: {
      checked: {
        component: RadioCheckedIcon,
      },
    },
  },
}
