import { ComponentTheme } from '../../theme'
import { SchemeType } from '../../styled-system/'
import { CheckmarkProps } from './contract'

export type CheckmarkTheme = {
  scheme: {
    Checkmark: SchemeType<CheckmarkProps>,
  },
}

export const checkmarkTheme: ComponentTheme<CheckmarkTheme> = (_, override) => {
  const scheme: CheckmarkTheme['scheme'] = {
    Checkmark: {
      variant: {
        primary: {
          style: {
            backgroundColor: 'gray10',
            backgroundColorHover: 'blue50',
            backgroundColorActive: 'blue50',
            backgroundColorChecked: 'blue40',
            backgroundColorDisabled: 'gray10',
          },
          checked: {
            style: {
              backgroundColorDisabled: 'gray30'
            }
          }
        },
        secondary: {
          style: {
            backgroundColor: 'gray10',
            backgroundColorHover: 'blue50',
            backgroundColorActive: 'blue50',
            backgroundColorChecked: 'blue40',
            backgroundColorDisabled: 'gray10',
          },
          checked: {
            style: {
              backgroundColorDisabled: 'gray30'
            }
          }
        },
        error: {
          style: {
            backgroundColor: 'gray10',
            backgroundColorHover: 'blue50',
            backgroundColorActive: 'blue50',
            backgroundColorChecked: 'blue40',
            backgroundColorDisabled: 'gray10',
          },
          checked: {
            style: {
              backgroundColorDisabled: 'gray30'
            }
          }
        },
        success: {
          style: {
            backgroundColor: 'gray10',
            backgroundColorHover: 'blue50',
            backgroundColorActive: 'blue50',
            backgroundColorChecked: 'blue40',
            backgroundColorDisabled: 'gray10',
          },
          checked: {
            style: {
              backgroundColorDisabled: 'gray30'
            }
          }
        },
        warning: {
          style: {
            backgroundColor: 'gray10',
            backgroundColorHover: 'blue50',
            backgroundColorActive: 'blue50',
            backgroundColorChecked: 'blue40',
            backgroundColorDisabled: 'gray10',
          },
          checked: {
            style: {
              backgroundColorDisabled: 'gray30'
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