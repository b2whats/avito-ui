import { createComponentTheme } from '../../theme/'
import { SchemeType } from '../../styled-system/'
import { SwitcherProps } from './contract'

export type SwitcherTheme = {
  scheme: {
    Switch: SchemeType<SwitcherProps>,
  },
}

const switcherTheme: SwitcherTheme = {
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
            backgroundColor: 'gray12',
            backgroundColorActive: 'gray28',
            backgroundColorDisabled: 'gray8',
          },
          checked: {
            style: {
              backgroundColor: 'blue500',
              backgroundColorActive: 'blue700',
              backgroundColorDisabled: 'blue300',
            },
          },
        },
        secondary: {
          style: {
            color: 'white',
            backgroundColor: 'gray12',
            backgroundColorActive: 'gray28',
            backgroundColorDisabled: 'gray4',
          },
          checked: {
            style: {
              backgroundColor: 'gray48',
              backgroundColorActive: 'gray56',
              backgroundColorDisabled: 'gray28',
            },
          },
        },
        success: {
          style: {
            color: 'white',
            backgroundColor: 'gray12',
            backgroundColorActive: 'gray28',
            backgroundColorDisabled: 'gray4',
          },
          checked: {
            style: {
              backgroundColor: 'green500',
              backgroundColorActive: 'green700',
              backgroundColorDisabled: 'gray28',
            },
          },
        },
        warning: {
          style: {
            color: 'white',
            backgroundColor: 'gray12',
            backgroundColorActive: 'gray28',
            backgroundColorDisabled: 'gray4',
          },
          checked: {
            style: {
              backgroundColor: 'orange500',
              backgroundColorActive: 'orange700',
              backgroundColorDisabled: 'gray28',
            },
          },
        },
        error: {
          style: {
            color: 'white',
            backgroundColor: 'gray12',
            backgroundColorActive: 'gray28',
            backgroundColorDisabled: 'gray4',
          },
          checked: {
            style: {
              backgroundColor: 'red500',
              backgroundColorActive: 'red700',
              backgroundColorDisabled: 'gray28',
            },
          },
        },
      },
      loading: {
        style: {
          focus: false,
          align: 'center',
          color: 'gray28',
          backgroundColor: 'transparent',
          backgroundColorActive: 'transparent',
          backgroundColorDisabled: 'transparent',
        },
      },
    },
  },
}

export const createSwitcherTheme = createComponentTheme('Switcher', switcherTheme)