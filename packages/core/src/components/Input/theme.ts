import { CrossIcon } from '@avito/icons'
import { SchemeType } from '../../styled-system/'
import { InputProps } from './contract'
import { IconProps } from '../Icon/contract'
import { TextProps } from '../Text/contract'

export type InputTheme = {
  deletePlaceholderOnFocus: boolean,
  scheme: {
    IconBefore: SchemeType<InputProps, IconProps>,
    InputField: SchemeType<InputProps>,
    Prefix: SchemeType<InputProps, TextProps>,
    Input: SchemeType<InputProps>,
    Postfix: SchemeType<InputProps, TextProps>,
    IconClear: SchemeType<InputProps, IconProps>,
    IconAfter: SchemeType<InputProps, IconProps>,
  },
}

export const inputTheme: InputTheme = {
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
            ml: 10,
            mr: 8,
          },
        },
        m: {
          props: {
            size: 's',
            ml: 10,
            mr: 8,
          },
        },
        l: {
          props: {
            ml: 10,
            mr: 8,
            size: 'm',
          },
        },
      },
    },
    IconAfter: {
      props: {
        color: 'gray28',
      },
      size: {
        s: {
          props: {
            size: 's',
            mx: 8,
          },
        },
        m: {
          props: {
            size: 's',
            mx: 10,
          },
        },
        l: {
          props: {
            size: 'm',
            mx: 10,
          },
        },
      },
    },
    Prefix: {
      props: {
        mr: 4,
      },
    },
    Postfix: {
      props: {
        ml: 4,
      },
    },
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
    InputField: {
      size: {
        s: {
          style: {
            px: 12,
          },
        },
        m: {
          style: {
            px: 16,
          },
        },
        l: {
          style: {
            px: 16,
          },
        },
      },
      iconBefore: {
        style: {
          pl: 'none',
        },
      },
      iconAfter: {
        style: {
          pr: 'none',
        },
      },
      clearable: {
        style: {
          pr: 'none',
        },
      },
    },
    Input: {
      style: {
        borderRadius: 5,
        placeholderColor: 'gray48',
        focus: true,
      },
      size: {
        s: {
          style: {
            fontSize: 12,
            height: 's',
          },
        },
        m: {
          style: {
            fontSize: 16,
            height: 'm',
          },
        },
        l: {
          style: {
            fontSize: 16,
            height: 'l',
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
            bg: 'green50',
          },
        },
        warning: {
          style: {
            color: 'black',
            colorDisabled: 'gray40',
            bg: 'orange50',
          },
        },
        error: {
          style: {
            color: 'black',
            colorDisabled: 'gray40',
            bg: 'red50',
          },
        },
      },
    },
  },
}