import { Theme, dsl, DeepPartial } from '@avito/core'

export const pikTheme: DeepPartial<Theme> = {
  font: {
    fontFamily: 'Avito,"Helvetica Neue",Helvetica,sans-serif',
    fontSize: {
      xl: 24,
    },
    smoothing: {
      webkit: 'antialiased',
      moz: 'grayscale',
    },
  },
  dimension: {
    rowHeight: {
      s: 36,
      m: 48,
      l: 56,
    },
  },
  Text: {
    scheme: {
      Text: {
        size: dsl.styleMap('lineHeight', {
          xs: 1.23,
          s: 1.43,
          m: 1.5,
          l: 1.4,
          xl: 1.34,
          xxl: 1.25,
          xxxl: 1.2,
        }),
      },
    },
  },
  Button: {
    scheme: {
      Button: {
        style: {
          borderRadius: 4,
          pressedOffset: 0,
        },
        size: {
          s: {
            style: {
              px: 24,
            },
          },
          m: {
            style: {
              px: 24,
            },
          },
          l: {
            style: {
              px: 36,
            },
            multiline: {
              style: {
                minWidth: 290,
                px: 48,
                height: 64,
              },
            },
          },
        },
        preset: {
          default: {
            style: {
              borderColor: 'gray16',
              bgHover: 'gray4',
              bgActive: 'gray8',
            },
          },
          newDefault: {
            style: {
              bg: 'gray4',
              bgHover: 'gray8',
              bgActive: 'gray12',
            },
          },
          warning: {
            style: {
              color: 'white',
            },
          },
        },
      },
    },
  },
}
