import { DeepPartial, InputTheme } from '@avito/core'

const gapSize = {
  s: 7,
  m: 10,
  l: 12,
}

export const inputTheme: DeepPartial<InputTheme> = {
  defaultProps: {
    kind: 'outline',
  },
  scheme: {
    IconBefore: {
      size: {
        s: {
          props: {
            mr: gapSize.s,
          },
        },
        m: {
          props: {
            mr: gapSize.m,
          },
        },
        l: {
          props: {
            mr: gapSize.l,
          },
        },
      },
    },
    IconAfter: {
      size: {
        s: {
          props: {
            ml: gapSize.s,
          },
        },
        m: {
          props: {
            ml: gapSize.m,
          },
        },
        l: {
          props: {
            ml: gapSize.l,
          },
        },
      },
    },
    Prefix: {
      size: {
        s: {
          props: {
            mr: gapSize.s,
          },
        },
        m: {
          props: {
            mr: gapSize.m,
          },
        },
        l: {
          props: {
            mr: gapSize.l,
          },
        },
      },
    },
    Input: {
      style: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 3,
        color: 'black',
        placeholderColor: 'gray40',
        colorDisabled: 'gray64',
        bgDisabled: 'gray4',
      },
      size: {
        s: {
          style: {
            fontSize: 's',
            px: gapSize.s,
          },
        },
        m: {
          style: {
            fontSize: 'm',
            px: gapSize.m,
          },
        },
        l: {
          style: {
            fontSize: 'l',
            px: gapSize.l,
          },
        },
      },
      variant: {
        primary: {
          style: {
            borderColor: 'gray28',
          },
        },
        secondary: {
          style: {
            // FIXME: How to style it?
            bg: 'gray8',
          },
        },
        success: {
          style: {
            borderColor: 'green500',
          },
        },
        warning: {
          style: {
            borderColor: 'orange500',
          },
        },
        error: {
          style: {
            borderColor: 'red500',
          },
        },
      },
    },
  },
}