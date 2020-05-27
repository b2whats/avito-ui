import { SchemeType } from '../../styled-system/'
import { IconProps } from '../Icon/contract'
import { TooltipProps } from './contract'

export type TooltipTheme = {
  defaultProps?: Partial<TooltipProps>,
  scheme: {
    Tooltip: SchemeType<TooltipProps>,
    Close: SchemeType<TooltipProps, IconProps>,
    Arrow: SchemeType<TooltipProps, never, { offset: number }>,
  },
}

export const tooltipTheme: TooltipTheme = {
  defaultProps: {
    arrow: {
      padding: 8,
    },
  },
  scheme: {
    Tooltip: {
      style: {
        bg: 'white',
        p: 16,
      },
    },
    Arrow: {
      style: {
        width: 10,
        height: 10,
        offset: 5,
      },
    },
    Close: {},
  },
}