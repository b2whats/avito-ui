import { DeepPartial, TooltipTheme } from '@avito/core'

export const tooltipTheme: DeepPartial<TooltipTheme> = {
  defaultProps: {
    offset: {
      offset: [0, 7],
    },
    arrow: {
      padding: 12,
    },
    arrowOffset: 4,
  },
  scheme: {
    Tooltip: {
      style: {
        bg: 'gray84',
        color: 'white',
        px: 16,
        py: 10,
        rounded: 10,
      },
    },
    Arrow: {
      style: {
        width: 10,
        height: 10,
        rounded: 2,
      },
    },
    Close: {},
  },
}