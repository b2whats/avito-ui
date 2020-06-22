import { Slot, ComponentTheme } from '../../styled-system/'
import { RadioCheckedIcon } from '../Icon/'
import { IconProps } from '../Icon/contract'
import { TextProps } from '../Text/contract'
import { RadioProps } from './contract'

export type RadioTheme = ComponentTheme<RadioProps, {
  Toggle?: Slot,
  Switch?: Slot,
  Icon?: Slot<IconProps>,
  Label?: Slot<TextProps>,
}>

export const radioTheme: RadioTheme = {
  defaultProps: {
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
