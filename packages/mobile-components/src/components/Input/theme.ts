import { DeepPartial, InputTheme } from '@avito/core'

export const inputTheme: DeepPartial<InputTheme> = {
  defaultProps: {
    kind: 'default',
  },
  scheme: {
    IconBefore: {
      props: {
        ml: 10,
        mr: 8,
      },
    },
    IconAfter: {
      size: {
        s: {
          props: {
            mx: 8,
          },
        },
        m: {
          props: {
            mx: 10,
          },
        },
        l: {
          props: {
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
        color: 'black',
        colorDisabled: 'gray40',
        placeholderColor: 'gray48',
      },
      size: {
        s: {
          style: {
            fontSize: 12,
          },
        },
        m: {
          style: {
            fontSize: 16,
          },
        },
        l: {
          style: {
            fontSize: 16,
          },
        },
      },
      variant: {
        primary: {
          style: {
            bg: 'gray4',
          },
        },
        secondary: {
          style: {
            bg: 'gray8',
          },
        },
        success: {
          style: {
            bg: 'green50',
          },
        },
        warning: {
          style: {
            bg: 'orange50',
          },
        },
        error: {
          style: {
            bg: 'red50',
          },
        },
      },
    },
  },
}
