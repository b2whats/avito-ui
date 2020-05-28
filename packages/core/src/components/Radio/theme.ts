import { RadioCheckedIcon } from '../Icon/'
import { SchemeType } from '../../styled-system/'
import { RadioProps } from './contract'
import { IconProps } from '../Icon/contract'
import { TextProps } from '../Text/contract'

export type RadioTheme = {
  defaultProps?: Partial<RadioProps>,
  scheme: {
    Toggle?: SchemeType<RadioProps>,
    Switch?: SchemeType<RadioProps>,
    Icon?: SchemeType<RadioProps, IconProps>,
    Label?: SchemeType<RadioProps, TextProps>,
  },
}

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
