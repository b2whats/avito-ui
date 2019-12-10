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
      style: {
        focus: true,
      },
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
            colorHover: 'blue700',
          },
          inverted: {
            style: {
              color: 'blue800',
              colorHover: 'blue600',
            },
          },
        },
        secondary: {
          style: {
            color: 'gray500',
            colorHover: 'gray700',
          },
          inverted: {
            style: {
              color: 'gray800',
              colorHover: 'gray600',
            },
          },
        },
        error: {
          style: {
            color: 'red500',
            colorHover: 'red700',
          },
          inverted: {
            style: {
              color: 'red800',
              colorHover: 'red600',
            },
          },
        },
        success: {
          style: {
            color: 'green500',
            colorHover: 'green700',
          },
          inverted: {
            style: {
              color: 'green800',
              colorHover: 'green600',
            },
          },
        },
        warning: {
          style: {
            color: 'yellow500',
            colorHover: 'yellow700',
          },
          inverted: {
            style: {
              color: 'yellow800',
              colorHover: 'yellow600',
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