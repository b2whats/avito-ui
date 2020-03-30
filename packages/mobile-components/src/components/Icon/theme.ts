import { createComponentTheme } from '../../theme/'
import { SchemeType } from '../../styled-system/'
import { IconProps } from './contract'
import { IconProps as IconBaseProps } from '@avito/icons'

export type IconTheme = {
  scheme: {
    Icon: SchemeType<IconProps, IconBaseProps>,
  }
}

const iconTheme: IconTheme = {
  scheme: {
    Icon: {
      size: {
        s: {
          props: {
            size: 16,
          },
        },
        m: {
          props: {
            size: 20,
          },
        },
        l: {
          props: {
            size: 24,
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
            color: 'gray500',
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

export const createIconTheme = createComponentTheme('Icon', iconTheme)