import { ComponentTheme } from '../../theme'
import { SchemeType } from '../../styled-system/'
import { IconProps } from './contract'
import { IconProps as IconBaseProps } from '@avito/icons'

export type IconTheme = {
  scheme: {
    Icon: SchemeType<IconProps, IconBaseProps>,
  }
}

export const iconTheme: ComponentTheme<IconTheme> = (_, override) => {
  const scheme: IconTheme['scheme'] = {
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

  return {
    scheme,
  }
}