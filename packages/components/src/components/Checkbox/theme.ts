import { ComponentTheme } from '../../theme'
import { SchemeType } from '../../styled-system/'
import { CheckboxProps } from './contract'

export type CheckboxTheme = {
  scheme: {
    Сheckbox: SchemeType<CheckboxProps>,
  },
}

export const checkboxTheme: ComponentTheme<CheckboxTheme> = (_, override) => {
  const scheme: CheckboxTheme['scheme'] = {
    Сheckbox: {
      variant: {
        primary: {
          style: {
            backgroundColor: 'gray10',
            backgroundColorHover: 'gray30',
            backgroundColorActive: 'gray30',
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
            backgroundColorHover: 'gray30',
            backgroundColorActive: 'gray30',
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
            backgroundColorHover: 'gray30',
            backgroundColorActive: 'gray30',
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
            backgroundColorHover: 'gray30',
            backgroundColorActive: 'gray30',
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
            backgroundColorHover: 'gray30',
            backgroundColorActive: 'gray30',
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