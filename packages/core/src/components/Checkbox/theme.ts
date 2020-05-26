import { CheckboxIndeterminateIcon, CheckboxCheckedIcon } from '../Icon/'
import { SchemeType } from '../../styled-system/'
import { CheckboxProps } from './contract'
import { TextProps } from '../Text/contract'
import { IconProps } from '../Icon/contract'

export type CheckboxTheme = {
  defaultProps?: Partial<CheckboxProps>,
  scheme: {
    Toggle?: SchemeType<CheckboxProps>,
    Switch?: SchemeType<CheckboxProps>,
    Icon?: SchemeType<CheckboxProps, IconProps>,
    Label?: SchemeType<CheckboxProps, TextProps>,
  },
}

export const checkboxTheme: CheckboxTheme = {
  defaultProps: {
    variant: 'primary',
    size: 'm',
  },
  scheme: {
    Switch: {
      style: {
        borderRadius: 2,
        height: 18,
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
        component: CheckboxCheckedIcon,
      },
      indeterminate: {
        component: CheckboxIndeterminateIcon,
      },
    },
  },
}