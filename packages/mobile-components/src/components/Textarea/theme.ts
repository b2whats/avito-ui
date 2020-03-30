import { createComponentTheme } from '../../theme/'
import { SchemeType } from '../../styled-system/'
import { TextareaProps } from './contract'
import { IconProps } from '../Icon/contract'

export type TextareaTheme = {
  deletePlaceholderOnFocus: boolean,
  scheme: {
    Textarea: SchemeType<TextareaProps>,
    IconClear: SchemeType<TextareaProps, IconProps>,
  },
}

const textareaTheme: TextareaTheme = {
  deletePlaceholderOnFocus: true,
  scheme: {
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
          },
        },
        m: {
          props: {
            size: 'm',
          },
        },
        l: {
          props: {
            size: 'l',
          },
        },
      },
    },
    Textarea: {
      style: {
        focus: true,
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
        },
        m: {
          style: {
            px: 16,
            py: 12,
            fontSize: 16,
            minHeight: 'm',
          },
        },
        l: {
          style: {
            px: 16,
            py: 16,
            fontSize: 16,
            minHeight: 'l',
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
  },
}

export const createTextareaTheme = createComponentTheme('Textarea', textareaTheme)