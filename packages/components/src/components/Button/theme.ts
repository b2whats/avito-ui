import { ComponentTheme } from '../../theme/'
import { SchemeType } from '../../styled-system/'
import { ButtonProps } from './contract'
import { TextProps } from '../Text/contract'
import { IconProps } from '../Icon/contract'
import { SpinnerProps } from '../Spinner/contract'

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
    Spinner: SchemeType<ButtonProps, SpinnerProps>,
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
        px: 16,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'transparent',
        focus: true,
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
      preset: {
        primary: {
          style: {
            color: 'white',
            colorDisabled: 'blue50',
            backgroundColor: 'blue500',
            backgroundColorActive: 'blue800',
            backgroundColorDisabled: 'blue300',
          },
        },
        accent: {
          style: {
            color: 'white',
            colorDisabled: 'gray48',
            backgroundColor: 'green500',
            backgroundColorActive: 'green800',
            backgroundColorDisabled: 'gray4',
          },
        },
        secondary: {
          style: {
            color: 'blue500',
            colorDisabled: 'gray48',
            backgroundColor: 'blue50',
            backgroundColorActive: 'blue100',
            backgroundColorDisabled: 'gray4',
          },
        },
        default: {
          style: {
            color: 'black',
            colorDisabled: 'gray48',
            backgroundColor: 'gray4',
            backgroundColorActive: 'gray8',
            backgroundColorDisabled: 'gray4',
          },
          checked: {
            style: {
              color: 'white',
              colorDisabled: 'blue50',
              backgroundColor: 'blue500',
              backgroundColorActive: 'blue800',
              backgroundColorDisabled: 'blue300',
            },
          },
        },
        defaultOnSurface: {
          style: {
            color: 'black',
            colorDisabled: 'gray48',
            backgroundColor: 'gray8',
            backgroundColorActive: 'gray12',
            backgroundColorDisabled: 'gray8',
          },
        },
        defaultDark: {
          style: {
            color: 'white',
            colorDisabled: 'gray40',
            backgroundColor: 'gray68',
            backgroundColorActive: 'gray76',
            backgroundColorDisabled: 'gray76',
          },
        },
        outline: {
          style: {
            color: 'black',
            colorDisabled: 'gray48',
            backgroundColor: 'white',
            borderColor: 'gray8',
            backgroundColorActive: 'gray8',
            //backgroundColorDisabled: 'gray4',
          },
        },
        pay: {
          style: {
            color: 'white',
            colorDisabled: 'gray40',
            backgroundColor: 'black',
            backgroundColorActive: 'gray76',
            backgroundColorDisabled: 'gray68',
          },
        },
        appInstall: {
          style: {
            color: 'blue500',
            colorDisabled: 'gray48',
            backgroundColor: 'gray4',
            backgroundColorActive: 'gray8',
            backgroundColorDisabled: 'gray4',
          },
        },
        linkIncreased: {
          style: {
            color: 'blue500',
            colorDisabled: 'gray40',
            backgroundColor: 'white',
            backgroundColorActive: 'gray4',
            backgroundColorDisabled: 'white',
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
            borderColor: 'gray32',
            borderColorHover: 'gray40',
            borderColorActive: 'gra52',
            borderColorDisabled: 'gray24',
            backgroundColor: 'gray32',
            backgroundColorHover: 'gray40',
            backgroundColorActive: 'gray52',
            backgroundColorChecked: 'gray32',
          },
          variant: {
            primary: {
              style: {
                color: 'blue500',
                colorHover: 'blue600',
                colorActive: 'blue700',
                colorDisabled: 'blue300',
              },
              checked: {
                style: {
                  color: 'red500',
                  colorHover: 'red600',
                  colorActive: 'red700',
                  colorDisabled: 'red300',
                  backgroundColor: 'red300',
                },
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
