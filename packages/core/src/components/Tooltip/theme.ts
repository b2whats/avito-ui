import { SchemeType } from '../../styled-system/'
import { TextProps } from '../Text/contract'
import { IconProps } from '../Icon/contract'
import { TooltipProps } from './contract'

export type TooltipTheme = {
  defaultProps?: Partial<TooltipProps>,
  scheme: {
    Tooltip: SchemeType<TooltipProps>,
    CloseIcon: SchemeType<TooltipProps, IconProps>,
    Arrow: SchemeType<TooltipProps>,
  },
  arrow?: any,
}

export const tooltipTheme: TooltipTheme = {
  defaultProps: {
    offset: {
      offset: [0, 10],
    },
    arrow: {
      padding: 5,
    },
  },
  scheme: {
    Tooltip: {
      style: {
        bg: 'white',
        p: 16,
        shadow: '0 5px 17px 0 rgba(0,0,0,.15)',
      },
      preset: {
        attention: {
          style: {
            bg: 'blue100',
          },
        },
        dark: {
          style: {
            bg: 'gray84',
            color: 'white',
            rounded: 'm',
          },
        },
      },
    },
    Arrow: {
      style: {
        width: 10,
        height: 10,
      },
    },
    CloseIcon: {},
  },
}