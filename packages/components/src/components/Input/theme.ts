import { ComponentTheme } from '../../theme/'
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

export const inputTheme: ComponentTheme<InputTheme> = (_, override) => {
  const component = {
    deletePlaceholderOnFocus: true,
  }
  const scheme: InputTheme['scheme'] = {
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
            backgroundColor: 'green50',
          },
        },
        warning: {
          style: {
            color: 'black',
            colorDisabled: 'gray40',
            backgroundColor: 'orange50',
          },
        },
        error: {
          style: {
            color: 'black',
            colorDisabled: 'gray40',
            backgroundColor: 'red50',
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
