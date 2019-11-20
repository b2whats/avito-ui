import { ComponentTheme } from '../../theme'
import { SchemeType } from '../../styled-system/'
import { IconProps } from './contract'

export type IconTheme = {
  scheme: {
    Icon: SchemeType<IconProps, 'variant' | 'onClick'>,
  },
}

export const iconTheme: ComponentTheme<IconTheme> = (_, override) => {
  const scheme: IconTheme['scheme'] = {
    Icon: {
      variant: {
        primary: {
          style: {
            color: 'blue50',
          },
          onClick: {
            style: {
              colorHover: 'red60',
            },
          },
        },
        secondary: {
          style: {
            color: 'gray50',
          },
          onClick: {
            style: {
              colorHover: 'red60',
            },
          },
        },
        error: {
          style: {
            color: 'red50',
          },
        },
        success: {
          style: {
            color: 'green50',
          },
        },
        warning: {
          style: {
            color: 'yellow50',
          },
        },
      },
    },
  }

  // ...override,
  return {
    scheme,
  }
}