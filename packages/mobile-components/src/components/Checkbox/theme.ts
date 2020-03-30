import { createComponentTheme } from '../../theme/'
import { SchemeType } from '../../styled-system/'
import { CheckboxProps } from './contract'
import { TextProps } from '../Text/contract'

export type CheckboxTheme = {
  scheme: {
    Toggle: SchemeType<CheckboxProps>,
    Switch: SchemeType<CheckboxProps>,
    Label: SchemeType<CheckboxProps, TextProps>,
  },
}

const checkboxTheme: CheckboxTheme = {
  scheme: {
    Toggle: {},
    Label: {},
    Switch: {
      style: {
        borderRadius: 2,
        height: 18,
      },
      shape: {
        circle: {
          style: {
            p: 1,
            height: 20,
          },
        },
        square: {
          style: {
            mx: 1,
          },
        },
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

export const createCheckboxTheme = createComponentTheme('Checkbox', checkboxTheme)