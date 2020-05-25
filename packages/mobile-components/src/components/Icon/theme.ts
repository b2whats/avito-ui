import { DeepPartial, IconTheme } from '@avito/core'

export const iconTheme: DeepPartial<IconTheme> = {
  defaultProps: {
    area: 3,
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
      name: {
        checkmark: {
          style: {
            color: 'blue500',
            colorDisabled: 'gray28',
          },
        },
      },
    },
  },
}