import { Slot, ComponentTheme } from '../../styled-system/'
import { SpinnerIcon, IconProps } from '../Icon'
import { SpinnerProps } from './contract'

export type SpinnerTheme = ComponentTheme<SpinnerProps, { Spinner: Slot<IconProps> }>

export const spinnerTheme: SpinnerTheme = {
  scheme: {
    Spinner: {
      component: SpinnerIcon,
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