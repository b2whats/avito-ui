import { SchemeType } from '../../styled-system/'
import { InputProps } from './contract'
import { IconProps } from '../Icon/contract'
import { TextProps } from '../Text/contract'

export type InputTheme = {
  defaultProps: Partial<InputProps>,
  deletePlaceholderOnFocus: boolean,
  scheme: {
    IconBefore: SchemeType<InputProps, IconProps>,
    InputField: SchemeType<InputProps>,
    Prefix: SchemeType<InputProps, TextProps>,
    Input: SchemeType<InputProps>,
    Postfix: SchemeType<InputProps, TextProps>,
    IconAfter: SchemeType<InputProps, IconProps>,
  },
}

export const inputTheme: InputTheme = {
  defaultProps: {
    variant: 'primary',
    size: 'm',
  },
  deletePlaceholderOnFocus: true,
  scheme: {
    IconBefore: {
      props: {
        color: 'gray28',
      },
      size: {
        s: {
          props: {
            size: 's',
          },
        },
        m: {
          props: {
            size: 's',
          },
        },
        l: {
          props: {
            size: 'm',
          },
        },
      },
    },
    IconAfter: {
      props: {
        color: 'gray28',
      },
      clearable: {
        props: {
          area: 10,
        },
      },
      size: {
        s: {
          props: {
            size: 's',
          },
        },
        m: {
          props: {
            size: 's',
          },
        },
        l: {
          props: {
            size: 'm',
          },
        },
      },
    },
    Prefix: {
    },
    Postfix: {
      props: {
        ml: 4,
      },
    },
    InputField: {
    },
    Input: {
      style: {
        focus: true,
      },
      size: {
        s: {
          style: {
            height: 's',
          },
        },
        m: {
          style: {
            height: 'm',
          },
        },
        l: {
          style: {
            height: 'l',
          },
        },
      },
    },
  },
}