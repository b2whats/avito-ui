import '@avito/icons/register/spinner'
import { SchemeType } from '../../styled-system/'
import { SpinnerProps } from './contract'
import { IconProps } from '../Icon'

export type SpinnerTheme = {
  scheme: {
    Icon: SchemeType<SpinnerProps, IconProps>,
  }
}

export const spinnerTheme: SpinnerTheme = {
  scheme: {
    Icon: {
      props: {
        name: 'spinner',
      },
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
  },
}