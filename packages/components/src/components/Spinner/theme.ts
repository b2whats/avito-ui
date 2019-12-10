import { ComponentTheme } from '../../theme'
import { SchemeType } from '../../styled-system/'
import { SpinnerProps } from './contract'

export type SpinnerTheme = {
  scheme: {
    Spinner: SchemeType<SpinnerProps>,
  }
}

export const spinnerTheme: ComponentTheme<SpinnerTheme> = (_, override) => {
  const scheme: SpinnerTheme['scheme'] = {
    Spinner: {
      size: {
        s: {
          style: {
            width: 16,
          },
        },
        m: {
          style: {
            width: 20,
          },
        },
        l: {
          style: {
            width: 24,
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
  }

  return {
    scheme,
  }
}