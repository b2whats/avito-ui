import { SchemeType } from '@avito/core/styled-system//'
import { ButtonProps } from './contract'
import { TextProps } from '../Text/contract'
import { IconProps } from '../Icon/contract'
import { SpinnerProps } from '../Spinner/contract'

export type ButtonTheme = {
  scheme: {
    Button: SchemeType<ButtonProps>,
    IconBefore: SchemeType<ButtonProps, IconProps>,
    Text: SchemeType<ButtonProps, TextProps>,
    IconAfter: SchemeType<ButtonProps, IconProps>,
    Spinner: SchemeType<ButtonProps, SpinnerProps>,
  },
}

export const buttonTheme: ButtonTheme = {
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
        size: 's',
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
            bg: 'blue500',
            bgActive: 'blue800',
            bgDisabled: 'blue300',
          },
        },
        accent: {
          style: {
            color: 'white',
            colorDisabled: 'gray48',
            bg: 'green500',
            bgActive: 'green800',
            bgDisabled: 'gray4',
          },
        },
        secondary: {
          style: {
            color: 'blue500',
            colorDisabled: 'gray48',
            bg: 'blue50',
            bgActive: 'blue100',
            bgDisabled: 'gray4',
          },
        },
        default: {
          style: {
            color: 'black',
            colorDisabled: 'gray48',
            bg: 'gray4',
            bgActive: 'gray8',
            bgDisabled: 'gray4',
          },
          checked: {
            style: {
              color: 'white',
              colorDisabled: 'blue50',
              bg: 'blue500',
              bgActive: 'blue800',
              bgDisabled: 'blue300',
            },
          },
        },
        defaultOnSurface: {
          style: {
            color: 'black',
            colorDisabled: 'gray48',
            bg: 'gray8',
            bgActive: 'gray12',
            bgDisabled: 'gray8',
          },
        },
        defaultDark: {
          style: {
            color: 'white',
            colorDisabled: 'gray40',
            bg: 'gray68',
            bgActive: 'gray76',
            bgDisabled: 'gray76',
          },
        },
        outline: {
          style: {
            color: 'black',
            colorDisabled: 'gray48',
            bg: 'white',
            borderColor: 'gray8',
            bgActive: 'gray8',
            //bgDisabled: 'gray4',
          },
        },
        pay: {
          style: {
            color: 'white',
            colorDisabled: 'gray40',
            bg: 'black',
            bgActive: 'gray76',
            bgDisabled: 'gray68',
          },
        },
        appInstall: {
          style: {
            color: 'blue500',
            colorDisabled: 'gray48',
            bg: 'gray4',
            bgActive: 'gray8',
            bgDisabled: 'gray4',
          },
        },
        linkIncreased: {
          style: {
            color: 'blue500',
            colorDisabled: 'gray40',
            bg: 'white',
            bgActive: 'gray4',
            bgDisabled: 'white',
          },
        },
      },
      kind: {
        default: {
          style: {
            bg: 'blue50',
            bgHover: 'blue60',
            bgActive: 'blue70',
            bgChecked: 'blue70',
            bgDisabled: 'blue30',
            color: 'white',
            colorDisabled: 'gray30',
          },
          variant: {
            primary: {
              style: {
                bg: 'blue50',
                bgHover: 'blue60',
                bgActive: 'blue70',
                bgChecked: 'blue70',
                bgDisabled: 'blue30',
              },
            },
            secondary: {
              style: {
                bg: 'gray50',
                bgHover: 'gray60',
                bgActive: 'gray70',
                bgChecked: 'gray70',
                bgDisabled: 'gray30',
                color: 'black',
                colorDisabled: 'gray70',
              },
            },
            success: {
              style: {
                bg: 'green50',
                bgHover: 'green60',
                bgActive: 'green70',
                bgChecked: 'green70',
                bgDisabled: 'green30',
              },
            },
            warning: {
              style: {
                bg: 'yellow50',
                bgHover: 'yellow60',
                bgActive: 'yellow70',
                bgChecked: 'yellow70',
                bgDisabled: 'yellow30',
                color: 'black',
                colorDisabled: 'gray70',
              },
            },
            error: {
              style: {
                bg: 'red50',
                bgHover: 'red60',
                bgActive: 'red70',
                bgChecked: 'red70',
                bgDisabled: 'red30',
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
            bg: 'gray32',
            bgHover: 'gray40',
            bgActive: 'gray52',
            bgChecked: 'gray32',
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
                  bg: 'red300',
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
            bg: 'gray30',
            bgHover: 'gray40',
            bgActive: 'gray50',
            bgChecked: 'gray30',
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
  },
}