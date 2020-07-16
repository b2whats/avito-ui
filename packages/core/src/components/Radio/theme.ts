import { Slot, ComponentTheme } from '../../styled-system/'
import { IconProps } from '../Icon/contract'
import { RadioCheckedIcon } from '../Icon/icons/'
import { TextProps } from '../Text/contract'
import { RadioProps } from './contract'

export type RadioTheme = ComponentTheme<RadioProps, {
  Toggle?: Slot
  Switch?: Slot
  Icon?: Slot<IconProps>
  Label?: Slot<TextProps>
}>

export const radioTheme: RadioTheme = {
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
