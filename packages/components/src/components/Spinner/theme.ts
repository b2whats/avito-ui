import { ComponentTheme } from '../../theme'
import { SchemeType } from '../../styled-system/'
import { SpinnerProps } from './contract'
import { IconProps } from '../Icon/'

export type SpinnerTheme = {
  scheme: {
    Spinner: SchemeType<SpinnerProps, IconProps>,
  }
}

export const spinnerTheme: ComponentTheme<SpinnerTheme> = (_, override) => {
  const scheme: SpinnerTheme['scheme'] = {
    Spinner: {
      size: {
        s: {
          props: {
            size: 16,
          },
        },
        m: {
          props: {
            size: 24,
          },
        },
        l: {
          props: {
            size: 32,
          },
        },
      },
    },
  }

  return {
    scheme,
  }
}