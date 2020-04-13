import { DeepPartial, ButtonTheme } from '@avito/core'

const fillTheme = (hue: string): ButtonTheme['scheme']['Button']['style'] => ({
  bg: `${hue}500`,
  bgHover: `${hue}600`,
  bgActive: `${hue}700`,
  bgDisabled: `${hue}500`,
  focus: `${hue}100`,
})

export const buttonTheme: DeepPartial<ButtonTheme> = {
  scheme: {
    Button: {
      size: {
        s: {
          style: {
            px: 12,
            py: 5,
          },
        },
        m: {
          style: {
            px: 16,
            py: 8,
          },
        },
        l: {
          style: {
            px: 18,
            py: 11,
          },
        },
      },
      preset: {
        default: {
          style: {
            bg: 'transparent',
            bgHover: 'gray4',
            bgActive: 'gray12',
            bgDisabled: 'transparent',
            borderColor: 'gray20',
            color: 'black',
            focus: 'blue100',
          },
        },
        primary: {
          style: {
            ...fillTheme('blue'),
            color: 'white',
          },
        },
        newDefault: {
          style: {
            bg: 'gray8',
            bgHover: 'gray12',
            bgActive: 'gray20',
            bgDisabled: 'gray8',
            color: 'black',
            focus: 'blue100',
          },
        },
        success: {
          style: {
            ...fillTheme('green'),
            color: 'white',
          },
        },
        warning: {
          style: {
            ...fillTheme('orange'),
            color: 'black',
          },
        },
        error: {
          style: {
            ...fillTheme('red'),
            color: 'white',
          },
        },
      },
    },
    Text: {
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
      iconBefore: {
        size: {
          s: {
            props: {
              ml: 4,
            },
          },
          m: {
            props: {
              ml: 6,
            },
          },
          l: {
            props: {
              ml: 8,
            },
          },
        },
      },
      iconAfter: {
        size: {
          s: {
            props: {
              mr: 4,
            },
          },
          m: {
            props: {
              mr: 6,
            },
          },
          l: {
            props: {
              mr: 8,
            },
          },
        },
      },
    },
  },
}