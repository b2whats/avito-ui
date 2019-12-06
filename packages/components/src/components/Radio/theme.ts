import { ComponentTheme } from '../../theme'
import { SchemeType } from '../../styled-system/'
import { RadioProps } from './contract'

export type RadioTheme = {
  scheme: {
    Radio: SchemeType<RadioProps>,
  },
}

export const radioTheme: ComponentTheme<RadioTheme> = (_, override) => {
  const scheme: RadioTheme['scheme'] = {
    Radio: {
      variant: {
        primary: {
          style: {
            backgroundColor: 'gray10',
            borderColor: 'gray10',
            backgroundColorHover: 'gray0',
            borderColorHover: 'blue50',
            borderColorActive: 'blue50',
            backgroundColorChecked: 'gray0',
            borderColorChecked: 'blue40',
            borderColorDisabled: 'gray10',
          },
          checked: {
            style: {
              backgroundColor: 'gray0',
              borderColor: 'blue40',
              borderColorDisabled: 'gray30',
            },
          },
        },
        secondary: {
          style: {
            backgroundColor: 'gray10',
            borderColor: 'gray10',
            backgroundColorHover: 'gray0',
            borderColorHover: 'blue50',
            borderColorActive: 'blue50',
            backgroundColorChecked: 'gray0',
            borderColorChecked: 'blue40',
            borderColorDisabled: 'gray10',
          },
          checked: {
            style: {
              backgroundColor: 'gray0',
              borderColor: 'blue40',
              borderColorDisabled: 'gray30',
            },
          },
        },
        error: {
          style: {
            backgroundColor: 'gray10',
            borderColor: 'gray10',
            backgroundColorHover: 'gray0',
            borderColorHover: 'blue50',
            borderColorActive: 'blue50',
            backgroundColorChecked: 'gray0',
            borderColorChecked: 'blue40',
            borderColorDisabled: 'gray10',
          },
          checked: {
            style: {
              backgroundColor: 'gray0',
              borderColor: 'blue40',
              borderColorDisabled: 'gray30',
            },
          },
        },
        success: {
          style: {
            backgroundColor: 'gray10',
            borderColor: 'gray10',
            backgroundColorHover: 'gray0',
            borderColorHover: 'blue50',
            borderColorActive: 'blue50',
            backgroundColorChecked: 'gray0',
            borderColorChecked: 'blue40',
            borderColorDisabled: 'gray10',
          },
          checked: {
            style: {
              backgroundColor: 'gray0',
              borderColor: 'blue40',
              borderColorDisabled: 'gray30',
            },
          },
        },
        warning: {
          style: {
            backgroundColor: 'gray10',
            borderColor: 'gray10',
            backgroundColorHover: 'gray0',
            borderColorHover: 'blue50',
            borderColorActive: 'blue50',
            backgroundColorChecked: 'gray0',
            borderColorChecked: 'blue40',
            borderColorDisabled: 'gray10',
          },
          checked: {
            style: {
              backgroundColor: 'gray0',
              borderColor: 'blue40',
              borderColorDisabled: 'gray30',
            },
          },
        },
      },
    },
  }

  // ...override,
  return {
    scheme,
  }
}