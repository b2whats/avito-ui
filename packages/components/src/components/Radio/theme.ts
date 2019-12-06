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
            backgroundColorHover: 'white',
            borderColorHover: 'blue50',
            borderColorActive: 'blue50',
            backgroundColorChecked: 'white',
            borderColorChecked: 'blue40',
            borderColorDisabled: 'gray10',
          },
          checked: {
            style: {
              borderColorDisabled: 'gray30'
            }
          }
        },
        secondary: {
          style: {
            backgroundColor: 'gray10',
            borderColor: 'gray10',
            backgroundColorHover: 'white',
            borderColorHover: 'blue50',
            borderColorActive: 'blue50',
            backgroundColorChecked: 'white',
            borderColorChecked: 'blue40',
            borderColorDisabled: 'gray10',
          },
          checked: {
            style: {
              borderColorDisabled: 'gray30'
            }
          }
        },
        error: {
          style: {
            backgroundColor: 'gray10',
            borderColor: 'gray10',
            backgroundColorHover: 'white',
            borderColorHover: 'blue50',
            borderColorActive: 'blue50',
            backgroundColorChecked: 'white',
            borderColorChecked: 'blue40',
            borderColorDisabled: 'gray10',
          },
          checked: {
            style: {
              borderColorDisabled: 'gray30'
            }
          }
        },
        success: {
          style: {
            backgroundColor: 'gray10',
            borderColor: 'gray10',
            backgroundColorHover: 'white',
            borderColorHover: 'blue50',
            borderColorActive: 'blue50',
            backgroundColorChecked: 'white',
            borderColorChecked: 'blue40',
            borderColorDisabled: 'gray10',
          },
          checked: {
            style: {
              borderColorDisabled: 'gray30'
            }
          }
        },
        warning: {
          style: {
            backgroundColor: 'gray10',
            borderColor: 'gray10',
            backgroundColorHover: 'white',
            borderColorHover: 'blue50',
            borderColorActive: 'blue50',
            backgroundColorChecked: 'white',
            borderColorChecked: 'blue40',
            borderColorDisabled: 'gray10',
          },
          checked: {
            style: {
              borderColorDisabled: 'gray30'
            }
          }
        },
      },
    },
  }

  // ...override,
  return {
    scheme,
  }
}