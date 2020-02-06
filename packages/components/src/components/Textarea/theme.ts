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
        color: 'gray28',
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
        placeholderColor: 'gray48',
      },
      size: {
        s: {
          style: {
            fontSize: 12,
            px: 12,
            py: 10,
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
            py: 16,
            fontSize: 16,
            minHeight: 'l',
          },
          clearable: {
            style: {
              pr: 36,
            },
          },
        },
      },
      variant: {
        primary: {
          style: {
            color: 'black',
            colorDisabled: 'gray40',
            backgroundColor: 'gray4',
          },
        },
        secondary: {
          style: {
            color: 'black',
            colorDisabled: 'gray40',
            backgroundColor: 'gray8',
          },
        },
        success: {
          style: {
            color: 'black',
            colorDisabled: 'gray40',
            backgroundColor: 'green100',
          },
        },
        warning: {
          style: {
            color: 'black',
            colorDisabled: 'gray40',
            backgroundColor: 'orange100',
          },
        },
        error: {
          style: {
            color: 'black',
            colorDisabled: 'gray40',
            backgroundColor: 'red100',
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
