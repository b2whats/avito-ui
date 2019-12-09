import { ComponentTheme } from '../../theme'
import { SchemeType } from '../../styled-system'
import { TextareaProps } from './contract'
import { IconProps } from '../Icon/contract'

export type TextareaTheme = {
  deletePlaceholderOnFocus: boolean,
  scheme: {
    Textarea: SchemeType<TextareaProps>,
    IconClear: SchemeType<TextareaProps, IconProps>,
  },
}

export const textareaTheme: ComponentTheme<TextareaTheme> = (_, override) => {
  const component = {
    deletePlaceholderOnFocus: true,
  }
  const scheme: TextareaTheme['scheme'] = {
    IconClear: {
      props: {
        color: '#BCBCBC',
        name: 'cross',
        area: 10,
      },
      size: {
        s: {
          props: {
            size: 's',
            m: 16,
          },
        },
        m: {
          props: {
            size: 's',
            m: 16,
          },
        },
        l: {
          props: {
            size: 'm',
            m: 16,
          },
        },
      },
    },
    Textarea: {
      style: {
        borderRadius: 5,
        focus: true,
        placeholderColor: '#858585',
      },
      size: {
        s: {
          style: {
            fontSize: 16,
            px: 16,
            py: 12,
            minHeight: 's',
          },
          clearable: {
            style: {
              pr: 30,
            },
          },
        },
        m: {
          style: {
            px: 16,
            py: 12,
            fontSize: 16,
            minHeight: 'm',
          },
          clearable: {
            style: {
              pr: 30,
            },
          },
        },
        l: {
          style: {
            px: 16,
            py: 12,
            fontSize: 16,
            minHeight: 'l',
          },
          clearable: {
            style: {
              pr: 30,
            },
          },
        },
      },
      variant: {
        primary: {
          style: {
            color: 'black',
            colorDisabled: 'gray70',
            backgroundColor: '#F5F5F5',
            backgroundColorDisabled: 'gray30',
          },
        },
        secondary: {
          style: {
            backgroundColor: 'gray50',
            backgroundColorHover: 'gray60',
            backgroundColorActive: 'gray70',
            backgroundColorChecked: 'gray70',
            backgroundColorDisabled: 'gray30',
            color: 'black',
            colorDisabled: 'gray70',
          },
        },
        success: {
          style: {
            backgroundColor: 'green50',
            backgroundColorHover: 'green60',
            backgroundColorActive: 'green70',
            backgroundColorChecked: 'green70',
            backgroundColorDisabled: 'green30',
          },
        },
        warning: {
          style: {
            backgroundColor: 'yellow50',
            backgroundColorHover: 'yellow60',
            backgroundColorActive: 'yellow70',
            backgroundColorChecked: 'yellow70',
            backgroundColorDisabled: 'yellow30',
            color: 'black',
            colorDisabled: 'gray70',
          },
        },
        error: {
          style: {
            backgroundColor: 'red50',
            backgroundColorHover: 'red60',
            backgroundColorActive: 'red70',
            backgroundColorChecked: 'red70',
            backgroundColorDisabled: 'red30',
          },
        },
      },
    },
  }
  

  return {
    ...component,
    scheme,
  }
}
