import { RadioCheckedIcon } from '@avito/icons'
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
        height: 18,
        focus: false,
        mx: 1,
      },
      variant: {
        primary: {
          style: {
            color: 'white',
            bg: 'gray8',
            bgActive: 'gray12',
            bgDisabled: 'gray4',
          },
          checked: {
            style: {
              bg: 'blue500',
              bgActive: 'blue700',
              bgDisabled: 'gray28',
            },
          },
        },
        secondary: {
          style: {
            color: 'white',
            bg: 'gray8',
            bgActive: 'gray12',
            bgDisabled: 'gray4',
          },
          checked: {
            style: {
              bg: 'gray48',
              bgActive: 'gray56',
              bgDisabled: 'gray28',
            },
          },
        },
        success: {
          style: {
            color: 'white',
            bg: 'gray8',
            bgActive: 'gray12',
            bgDisabled: 'gray4',
          },
          checked: {
            style: {
              bg: 'green500',
              bgActive: 'green700',
              bgDisabled: 'gray28',
            },
          },
        },
        warning: {
          style: {
            color: 'white',
            bg: 'gray8',
            bgActive: 'gray12',
            bgDisabled: 'gray4',
          },
          checked: {
            style: {
              bg: 'orange500',
              bgActive: 'orange700',
              bgDisabled: 'gray28',
            },
          },
        },
        error: {
          style: {
            color: 'white',
            bg: 'gray8',
            bgActive: 'gray12',
            bgDisabled: 'gray4',
          },
          checked: {
            style: {
              bg: 'red500',
              bgActive: 'red700',
              bgDisabled: 'gray28',
            },
          },
        },
      },
    },
    Icon: {
      checked: {
        component: RadioCheckedIcon,
      },
    },
  },
}