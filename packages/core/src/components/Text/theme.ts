import { SchemeType } from '../../styled-system/'
import { dsl } from '../../theme'
import { TextProps } from './contract'

export type TextTheme = {
  scheme: {
    Text: SchemeType<TextProps, TextProps>,
  },
}

export const textTheme: TextTheme = {
  scheme: {
    Text: {
      style: {
        lineHeight: 'normal',
      },
      size: {
        xs: {
          style: {
            fontSize: 'xs',
          },
        },
        s: {
          style: {
            fontSize: 's',
          },
        },
        m: {
          style: {
            fontSize: 'm',
          },
        },
        l: {
          style: {
            fontSize: 'l',
          },
        },
        xl: {
          style: {
            fontSize: 'xl',
          },
        },
        xxl: {
          style: {
            fontSize: 'xxl',
          },
        },
        xxxl: {
          style: {
            fontSize: 'xxxl',
          },
        },
      },
      dense: {
        style: {
          lineHeight: 'dense',
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
      preset: dsl.propMap('as', {
        'title': 'h1',
        'title-small': 'h2',
        'heading-large': 'h3',
        'heading': 'h4',
        'heading-small': 'h5',
      } as const),
    },
  },
}