import { ComponentTheme, Slot } from '../../styled-system/'
import { dsl } from '../../theme'
import { IconProps } from '../Icon/contract'
import { TooltipProps } from './contract'

export type TooltipTheme = ComponentTheme<TooltipProps, {
  Tooltip: Slot
  Close: Slot<IconProps>
  Arrow: Slot<never>
}>

export const tooltipTheme = dsl.theme<TooltipTheme>()
  .defaultProps({
    animation: 'fade',
    arrow: {
      padding: 8,
    },
    arrowOffset: 5,
  })
  .slot('Tooltip', {
    style: {
      bg: 'white',
    },
  })
  .slot('Arrow', {
    style: {
      width: 10,
      height: 10,
    },
  })
  .slot('Close')
  .build()
