import { createComponentTheme } from '../../theme/'
import { SchemeType } from '../../styled-system/'
import { RadioProps } from './contract'

export type RadioTheme = {
  scheme: {
    Switch: SchemeType<RadioProps>,
  },
}

const radioTheme: RadioTheme = {
  scheme: {
    Switch: {
      style: {
        height: 18,
        focus: true,
        mx: 1,
      },
      variant: {
        primary: {
          style: {
            color: 'white',
            backgroundColor: 'gray4',
            backgroundColorActive: 'gray12',
            backgroundColorDisabled: 'gray4',
          },
          checked: {
            style: {
              backgroundColor: 'blue500',
              backgroundColorActive: 'blue700',
              backgroundColorDisabled: 'gray28',
            },
          },
        },
        secondary: {
          style: {
            color: 'white',
            backgroundColor: 'gray4',
            backgroundColorActive: 'gray12',
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
            backgroundColor: 'gray4',
            backgroundColorActive: 'gray12',
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
            backgroundColor: 'gray4',
            backgroundColorActive: 'gray12',
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
            backgroundColor: 'gray4',
            backgroundColorActive: 'gray12',
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
    },
  },
}

export const createRadioTheme = createComponentTheme('Radio', radioTheme)