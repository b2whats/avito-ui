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
          },
          inverted: {
            style: {
              color: 'blue800',
            },
          },
        },
        secondary: {
          style: {
            color: 'gray500',
          },
          inverted: {
            style: {
              color: 'gray800',
            },
          },
        },
        error: {
          style: {
            color: 'red500',
          },
          inverted: {
            style: {
              color: 'red800',
            },
          },
        },
        success: {
          style: {
            color: 'green500',
          },
          inverted: {
            style: {
              color: 'green800',
            },
          },
        },
        warning: {
          style: {
            color: 'yellow500',
          },
          inverted: {
            style: {
              color: 'yellow800',
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