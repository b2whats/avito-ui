import { SchemeType } from '../../styled-system/'
import { ButtonProps } from './contract'
import { TextProps } from '../Text/contract'
import { IconProps } from '../Icon/contract'
import { SpinnerProps } from '../Spinner/contract'

export type ButtonTheme = {
  defaultProps?: Partial<ButtonProps>,
  scheme: {
    Button: SchemeType<ButtonProps>,
    IconBefore: SchemeType<ButtonProps, IconProps>,
    Text: SchemeType<ButtonProps, TextProps>,
    IconAfter: SchemeType<ButtonProps, IconProps>,
    Spinner: SchemeType<ButtonProps, SpinnerProps>,
  },
}

export const buttonTheme: ButtonTheme = {
  defaultProps: {
    size: 'm',
    type: 'button',
  },
  scheme: {
    Spinner: {
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
    IconBefore: {
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
    Text: {
      props: {
        size: 'm',
      },
      iconBefore: {
        props: {
          ml: 6,
        },
      },
      iconAfter: {
        props: {
          mr: 6,
        },
      },
    },
    Button: {
      style: {
        borderRadius: 3,
        px: 16,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'transparent',
        focus: false,
      },
      size: {
        s: {
          style: {
            py: 4,
            minHeight: 's',
          },
        },
        m: {
          style: {
            py: 6,
            minHeight: 'm',
          },
        },
        l: {
          style: {
            py: 8,
            minHeight: 'l',
          },
        },
      },
      iconBefore: {
        children: {
          style: {
            pl: 12,
          },
        },
      },
      iconAfter: {
        children: {
          style: {
            pr: 12,
          },
        },
      },
    },
  },
}