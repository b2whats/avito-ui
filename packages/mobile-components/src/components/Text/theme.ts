import { createComponentTheme } from '../../theme/'
import { SchemeType } from '../../styled-system/'
import { TextProps } from './contract'

export type TextTheme = {
  scheme: {
    Text: SchemeType<TextProps, TextProps>,
  },
}

const textTheme: TextTheme = {
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
      preset: {
        title: {
          props: {
            as: 'h1',
            size: 'xxl',
            mb: 36,
          },
        },
        'title-small': {
          props: {
            as: 'h2',
            size: 'xl',
            dense: true,
            bold: true,
            mb: 26,
          },
        },
        'heading-large': {
          props: {
            as: 'h3',
            size: 'l',
            dense: true,
            bold: true,
            mb: 22,
          },
        },
        'heading': {
          props: {
            as: 'h4',
            size: 'l',
            dense: true,
            mb: 22,
          },
        },
        'heading-small': {
          props: {
            as: 'h5',
            size: 'm',
            mb: 16,
          },
        },
      },
    },
  },
}

export const createTextTheme = createComponentTheme('Text', textTheme)