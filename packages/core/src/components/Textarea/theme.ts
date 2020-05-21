import { Slot, ComponentTheme } from '../../styled-system/'
import { TextareaProps } from './contract'
import { IconProps } from '../Icon/contract'
import { CrossIcon } from '../Icon/'

export type TextareaTheme = ComponentTheme<TextareaProps, {
  Textarea: Slot,
  IconClear: Slot<IconProps>,
}, {
  deletePlaceholderOnFocus: boolean,
}>

export const textareaTheme: TextareaTheme = {
  deletePlaceholderOnFocus: true,
  defaultProps: {
    variant: 'primary',
    size: 'm',
  },
  scheme: {
    IconClear: {
      component: CrossIcon,
      props: {
        color: 'gray28',
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
        lineHeight: 'normal',
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
            bg: 'gray4',
          },
        },
        secondary: {
          style: {
            color: 'black',
            colorDisabled: 'gray40',
            bg: 'gray8',
          },
        },
        success: {
          style: {
            color: 'black',
            colorDisabled: 'gray40',
            bg: 'green100',
          },
        },
        warning: {
          style: {
            color: 'black',
            colorDisabled: 'gray40',
            bg: 'orange100',
          },
        },
        error: {
          style: {
            color: 'black',
            colorDisabled: 'gray40',
            bg: 'red100',
          },
        },
      },
    },
  },
}