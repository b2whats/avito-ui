import { SchemeType } from '../../styled-system/'
import { IconProps } from './contract'


export type IconTheme = {
  defaultProps?: Partial<IconProps>,
  scheme: {
    Icon: SchemeType<IconProps>,
  }
}

export const iconTheme: IconTheme = {
  defaultProps: {
    area: 3,
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