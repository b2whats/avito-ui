import { SchemeType } from '@avito/core/styled-system/'
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