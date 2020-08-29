import { ComponentTheme, Slot } from '../../styled-system/'
import { dsl } from '../../theme'
import { IconProps } from '../Icon/contract'
import { TextProps } from '../Text/contract'
import { ToggleProps } from './contract'

export type ToggleTheme = ComponentTheme<ToggleProps, {
  Toggle: Slot
  Switch: Slot
  Icon: Slot<IconProps>
  Label: Slot<TextProps>
}>

export const toggleTheme = dsl.theme<ToggleTheme>()
  .defaultProps({
    labelPosition: 'end',
    variant: 'primary',
    size: 'm',
  })
  .slot('Label', {
    size: 'm',
  })
  .slot('Toggle', {
    valign: 'baseline',
    userSelect: false,
  })
  .slot('Switch', {
    shrink: false,
    adjacentSelector: 'input',
    shape: props => props.shape,
    variant: props => props.variant,
    userSelect: false,
  })
  .build()
