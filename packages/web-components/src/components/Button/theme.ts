import { ButtonTheme, StyleProperties, dsl } from '@avito/core'

const fillTheme = (hue: string): StyleProperties => ({
  bg: `${hue}500`,
  bgHover: `${hue}600`,
  bgActive: `${hue}700`,
  bgDisabled: `${hue}500`,
  focus: `${hue}100`,
})

export const buttonTheme = dsl.theme<ButtonTheme>()
  .defaultProps({
    size: 's',
    preset: 'default',
    pressedOffset: 1,
  })
  .mapProps(({ kind, preset }) => ({
    kind: kind || (preset === 'default' ? 'outline' : 'fill'),
  }))
  .slot('Button', {
    multiline: {
      style: {
        py: 9,
      },
    },
    disabled: {
      style: {
        overlay: 'rgba(255,255,255,0.5)',
      },
    },
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
  })
  .slot('Text', {
    props: {
      // Ужатые строки для двустрочной кнопки - на 1 строку не влияет
      lineHeight: 1.1875,
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
    iconBefore: {
      props: {
        align: 'left',
      },
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
      multiline: {
        props: {
          ml: 10,
        },
      },
    },
    iconAfter: {
      props: {
        align: 'left',
      },
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
      multiline: {
        props: {
          mr: 10,
        },
      },
    },
  })
  .slot('Spinner', {
    props: {
      variant: undefined,
    },
    preset: {
      default: {
        props: {
          variant: 'primary',
        },
      },
    },
  })
  .build()
