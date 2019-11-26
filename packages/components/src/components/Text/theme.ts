import { ComponentTheme } from '../../theme/'
import { SchemeType, PresetType } from '../../styled-system/'
import { TextProps } from './contract'

export type TextTheme = {
  scheme: {
    Text: SchemeType<TextProps>,
  },
  preset: {
    Text: PresetType<TextProps>,
  },
  strike: {
    offset: number,
    height: number,
  }
}

export const textTheme: ComponentTheme<TextTheme> = (_, override) => {
  const component = {
    strike: {
      offset: 0,
      height: 1,
    },
  }

  const scheme: TextTheme['scheme'] = {
    Text: {
      style: {
        fontSize: 'm',
        lineHeight: 'normal',
        color: 'gray90',
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
            color: 'blue50',
          },
        },
        secondary: {
          style: {
            color: 'gray50',
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

  const preset: TextTheme['preset'] = {
    Text: {
      title: {
        as: 'h1',
        size: 'xxl',
        mb: 36,
      },
      'title-small': {
        as: 'h2',
        size: 'xl',
        dense: true,
        bold: true,
        mb: 26,
      },
      'heading-large': {
        as: 'h3',
        size: 'l',
        dense: true,
        bold: true,
        mb: 22,
      },
      'heading': {
        as: 'h4',
        size: 'l',
        dense: true,
        mb: 22,
      },
      'heading-small': {
        as: 'h5',
        size: 'm',
        mb: 16,
      },
    },
  }

  return {
    ...component,
    scheme,
    preset,
  }
}
