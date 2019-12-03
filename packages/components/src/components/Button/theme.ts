import { ComponentTheme } from '../../theme/'
import { SchemeType } from '../../styled-system/'
import { ButtonProps } from './contract'
import { TextProps } from '../Text/contract'
import { IconProps } from '../Icon/contract'

export type ButtonTheme = {
  pressOffset: {
    default: number,
    outline: number,
    flat: number,
  },
  scheme: {
    Button: SchemeType<ButtonProps>,
    IconBefore: SchemeType<ButtonProps, IconProps>,
    Text: SchemeType<ButtonProps, TextProps>,
    IconAfter: SchemeType<ButtonProps, IconProps>,
  },
}

export const buttonTheme: ComponentTheme<ButtonTheme> = (_, override) => {
  const component = {
    pressOffset: {
      default: 1,
      outline: 1,
      flat: 1,
    },
  }
  const scheme: ButtonTheme['scheme'] = {
    IconBefore: {
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
    IconAfter: {
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
    Text: {
      iconBefore: {
        props: {
          ml: 2,
        },
      },
      iconAfter: {
        props: {
          mr: 2,
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
            size: 'm',
          },
        },
        l: {
          props: {
            size: 'l',
          },
        },
      },
      kind: {
        flat: {
          props: {
            uppercase: true,
          },
        },
      },
    },
    Button: {
      style: {
        borderRadius: 3,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'transparent',
        focus: true,
      },
      size: {
        s: {
          style: {
            px: 'm',
            py: 'xs',
            minHeight: 's',
          },
          iconBefore: {
            children: {
              style: {
                pl: 's',
              },
            },
          },
        },
        m: {
          style: {
            px: 'm',
            py: 's',
            minHeight: 'm',
          },
          iconBefore: {
            children: {
              style: {
                pl: 's',
              },
            },
          },
        },
        l: {
          style: {
            px: 'm',
            py: 's',
            minHeight: 'l',
          },
          iconBefore: {
            children: {
              style: {
                pl: 's',
              },
            },
          },
        },
      },
      kind: {
        default: {
          style: {
            backgroundColor: 'blue50',
            backgroundColorHover: 'blue60',
            backgroundColorActive: 'blue70',
            backgroundColorChecked: 'blue70',
            backgroundColorDisabled: 'blue30',
            color: 'white',
            colorDisabled: 'gray30',
          },
          variant: {
            primary: {
              style: {
                backgroundColor: 'blue50',
                backgroundColorHover: 'blue60',
                backgroundColorActive: 'blue70',
                backgroundColorChecked: 'blue70',
                backgroundColorDisabled: 'blue30',
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
        outline: {
          style: {
            borderColor: 'gray30',
            borderColorHover: 'gray40',
            borderColorActive: 'gra50',
            borderColorDisabled: 'gray20',
            backgroundColor: 'gray30',
            backgroundColorHover: 'gray40',
            backgroundColorActive: 'gray50',
            backgroundColorChecked: 'gray30',
          },
          variant: {
            primary: {
              style: {
                color: 'blue50',
                colorHover: 'blue60',
                colorActive: 'blue70',
                colorDisabled: 'blue30',
              },
            },
            secondary: {
              style: {
                color: 'gray50',
                colorHover: 'gray60',
                colorActive: 'gray70',
                colorDisabled: 'gray30',
              },
            },
            success: {
              style: {
                color: 'green50',
                colorHover: 'green60',
                colorActive: 'green70',
                colorDisabled: 'green30',
              },
            },
            warning: {
              style: {
                color: 'yellow50',
                colorHover: 'yellow60',
                colorActive: 'yellow70',
                colorDisabled: 'yellow30',
              },
            },
            error: {
              style: {
                color: 'red50',
                colorHover: 'red60',
                colorActive: 'red70',
                colorDisabled: 'red30',
              },
            },
          },
        },
        flat: {
          style: {
            borderColor: 'gray30',
            borderColorHover: 'gray40',
            borderColorActive: 'gra50',
            borderColorDisabled: 'gray20',
            backgroundColor: 'gray30',
            backgroundColorHover: 'gray40',
            backgroundColorActive: 'gray50',
            backgroundColorChecked: 'gray30',
          },
          variant: {
            primary: {
              style: {
                color: 'blue50',
                colorHover: 'blue60',
                colorActive: 'blue70',
                colorDisabled: 'blue30',
              },
            },
            secondary: {
              style: {
                color: 'gray50',
                colorHover: 'gray60',
                colorActive: 'gray70',
                colorDisabled: 'gray30',
              },
            },
            success: {
              style: {
                color: 'green50',
                colorHover: 'green60',
                colorActive: 'green70',
                colorDisabled: 'green30',
              },
            },
            warning: {
              style: {
                color: 'yellow50',
                colorHover: 'yellow60',
                colorActive: 'yellow70',
                colorDisabled: 'yellow30',
              },
            },
            error: {
              style: {
                color: 'red50',
                colorHover: 'red60',
                colorActive: 'red70',
                colorDisabled: 'red30',
              },
            },
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
