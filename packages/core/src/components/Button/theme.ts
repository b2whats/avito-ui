import { ComponentTheme, Slot } from '../../styled-system/'
import { IconProps } from '../Icon/contract'
import { SpinnerProps } from '../Spinner/contract'
import { TextProps } from '../Text/contract'
import { ButtonProps } from './contract'


export type ButtonTheme = ComponentTheme<ButtonProps, {
  Button: Slot<never>,
  IconBefore: Slot<IconProps>,
  Text: Slot<TextProps>,
  IconAfter: Slot<IconProps>,
  Spinner: Slot<SpinnerProps>,
}>

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
        crop: true,
        valignSelf: 'middle',
        size: 'm',
        ml: -1,
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
