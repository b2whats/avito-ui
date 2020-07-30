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
  .slot('Toggle')
  .slot('Switch')
  .slot('Icon')
  .slot('Label', {
    props: {
      size: 'm',
    },
  })
  .build()
