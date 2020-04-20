import { SchemeType } from '../../styled-system/'
import { SwitcherProps } from './contract'

export type SwitcherTheme = {
  scheme: {
    Switch: SchemeType<SwitcherProps>,
  },
}

export const switcherTheme: SwitcherTheme = {
  scheme: {
    Switch: {
      style: {
        width: 48,
        height: 25,
        p: 3,
        focus: true,
      },
      variant: {
        primary: {
          style: {
            color: 'white',
            bg: 'gray12',
            bgActive: 'gray28',
            bgDisabled: 'gray8',
          },
          checked: {
            style: {
              bg: 'blue500',
              bgActive: 'blue700',
              bgDisabled: 'blue300',
            },
          },
        },
        secondary: {
          style: {
            color: 'white',
            bg: 'gray12',
            bgActive: 'gray28',
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
            bg: 'gray12',
            bgActive: 'gray28',
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
            bg: 'gray12',
            bgActive: 'gray28',
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
            bg: 'gray12',
            bgActive: 'gray28',
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
      loading: {
        style: {
          focus: false,
          align: 'center',
          color: 'gray28',
          bg: 'transparent',
          bgActive: 'transparent',
          bgDisabled: 'transparent',
        },
      },
    },
  },
}