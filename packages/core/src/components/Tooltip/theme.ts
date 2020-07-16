import { ComponentTheme, Slot } from '../../styled-system/'
import { IconProps } from '../Icon/contract'
import { TooltipProps } from './contract'

export type TooltipTheme = ComponentTheme<TooltipProps, {
  Tooltip: Slot
  Close: Slot<IconProps>
  Arrow: Slot<never>
}>

export const tooltipTheme: TooltipTheme = {
  defaultProps: {
    animation: 'fade',
    arrow: {
      padding: 8,
    },
    arrowOffset: 5,
  },
  scheme: {
    Tooltip: {
      style: {
        bg: 'white',
      },
    },
    Arrow: {
      style: {
        width: 10,
        height: 10,
      },
    },
    Close: {},
  },
}
