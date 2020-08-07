import { Slot, ComponentTheme } from '../../styled-system/'
import { dsl } from '../../theme'
import { IconProps } from '../Icon/'
import { SpinnerIcon } from '../Icon/icons/'
import { SpinnerProps } from './contract'

export type SpinnerTheme = ComponentTheme<SpinnerProps, { Spinner: Slot<IconProps> }>

export const spinnerTheme = dsl.theme<SpinnerTheme>()
  .defaultProps({
    size: 'm',
  })
  .slot('Spinner', slot => ({
    component: SpinnerIcon,
    size: slot.mapped('size', { s: 16, m: 24, l: 32 }),
  }))
  .build()
