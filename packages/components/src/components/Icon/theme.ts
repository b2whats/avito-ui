import { ComponentTheme } from '../../theme'
import { SchemeType } from '../../styled-system/'
import { IconProps } from './contract'

export type IconTheme = {
  scheme: {
    Icon: SchemeType<IconProps, 'variant' | 'onClick'>,
  },
}

export const iconTheme: ComponentTheme<IconTheme> = (_, override) => {
  const sizes = {
    s: 16,
    m: 20,
    l: 24,
  }

  const scheme: IconTheme['scheme'] = {
    Icon: {
      variant: {
        primary: {
          style: {
            color: 'blue50',
            colorHover: 'blue70',
          },
          inverted: {
            style: {
              color: 'blue80',
              colorHover: 'blue60',
            },
          },
        },
        secondary: {
          style: {
            color: 'gray50',
            colorHover: 'gray70',
          },
          inverted: {
            style: {
              color: 'gray80',
              colorHover: 'gray60',
            },
          },
        },
        error: {
          style: {
            color: 'red50',
            colorHover: 'red70',
          },
          inverted: {
            style: {
              color: 'red80',
              colorHover: 'red60',
            },
          },
        },
        success: {
          style: {
            color: 'green50',
            colorHover: 'green70',
          },
          inverted: {
            style: {
              color: 'green80',
              colorHover: 'green60',
            },
          },
        },
        warning: {
          style: {
            color: 'yellow50',
            colorHover: 'yellow70',
          },
          inverted: {
            style: {
              color: 'yellow80',
              colorHover: 'yellow60',
            },
          },
        },
      },
    },
  }

  // ...override,
  return {
    scheme,
    sizes,
  }
}