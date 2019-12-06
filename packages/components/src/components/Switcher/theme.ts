import { ComponentTheme } from '../../theme'
import { SchemeType } from '../../styled-system/'
import { SwitcherProps } from './contract'

export type SwitcherTheme = {
  scheme: {
    Switcher: SchemeType<SwitcherProps>,
  },
}

export const switcherTheme: ComponentTheme<SwitcherTheme> = (_, override) => {
  const scheme: SwitcherTheme['scheme'] = {
    Switcher: {
      variant: {
        primary: {
          style: {
            backgroundColor: 'gray40',
            backgroundColorActive: 'gray40',
            backgroundColorHover: 'gray40',
            backgroundColorChecked: 'blue50',
            backgroundColorDisabled: 'gray10',
          },
          checked: {
            style: {
              backgroundColor: 'blue50',
              backgroundColorHover: 'blue60',
              backgroundColorActive: 'blue60',
              backgroundColorDisabled: 'blue20',
            }
          }
        },
        secondary: {
          style: {
            backgroundColor: 'gray40',
            backgroundColorActive: 'gray40',
            backgroundColorHover: 'gray40',
            backgroundColorChecked: 'blue50',
            backgroundColorDisabled: 'gray10',
          },
          checked: {
            style: {
              backgroundColor: 'blue50',
              backgroundColorHover: 'blue60',
              backgroundColorActive: 'blue60',
              backgroundColorDisabled: 'blue20',
            }
          }
        },
        error: {
          style: {
            backgroundColor: 'gray40',
            backgroundColorActive: 'gray40',
            backgroundColorHover: 'gray40',
            backgroundColorChecked: 'blue50',
            backgroundColorDisabled: 'gray10',
          },
          checked: {
            style: {
              backgroundColor: 'blue50',
              backgroundColorHover: 'blue60',
              backgroundColorActive: 'blue60',
              backgroundColorDisabled: 'blue20',
            }
          }
        },
        success: {
          style: {
            backgroundColor: 'gray40',
            backgroundColorActive: 'gray40',
            backgroundColorHover: 'gray40',
            backgroundColorChecked: 'blue50',
            backgroundColorDisabled: 'gray10',
          },
          checked: {
            style: {
              backgroundColor: 'blue50',
              backgroundColorHover: 'blue60',
              backgroundColorActive: 'blue60',
              backgroundColorDisabled: 'blue20',
            }
          }
        },
        warning: {
          style: {
            backgroundColor: 'gray40',
            backgroundColorActive: 'gray40',
            backgroundColorHover: 'gray40',
            backgroundColorChecked: 'blue50',
            backgroundColorDisabled: 'gray10',
          },
          checked: {
            style: {
              backgroundColor: 'blue50',
              backgroundColorHover: 'blue60',
              backgroundColorActive: 'blue60',
              backgroundColorDisabled: 'blue20',
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