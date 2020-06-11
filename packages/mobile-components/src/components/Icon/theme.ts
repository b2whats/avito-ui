import { DeepPartial, IconTheme } from '@avito/core'

export const iconTheme: DeepPartial<IconTheme> = {
  mapProps: ({ onClick }) => ({
    ...onClick && { area: 5 },
  }),
  defaultProps: {
    size: 'm',
  },
  scheme: {
    Icon: {
      size: {
        s: {
          style: {
            height: 16,
          },
        },
        m: {
          style: {
            height: 20,
          },
        },
        l: {
          style: {
            height: 24,
          },
        },
      },
      variant: {
        primary: {
          style: {
            color: 'blue500',
          },
        },
        secondary: {
          style: {
            color: 'gray52',
          },
        },
        error: {
          style: {
            color: 'red500',
          },
        },
        success: {
          style: {
            color: 'green500',
          },
        },
        warning: {
          style: {
            color: 'yellow500',
          },
        },
      },
    },
  },
}
