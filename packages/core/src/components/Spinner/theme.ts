import { Slot, ComponentTheme } from '../../styled-system/'
import { dsl } from '../../theme'
import { IconProps } from '../Icon/'
import { SpinnerIcon } from '../Icon/icons/'
import { SpinnerProps } from './contract'

export type SpinnerTheme = ComponentTheme<SpinnerProps, { Spinner: Slot<IconProps> }>

export const spinnerTheme = dsl.theme<SpinnerTheme>()
  .slot('Spinner', slot => [{
    component: SpinnerIcon,
  }, slot.switch('size', {
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
  })])
  .build()
