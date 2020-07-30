import { TooltipTheme, dsl } from '@avito/core'

export const tooltipTheme = dsl.theme<TooltipTheme>()
  .defaultProps({
    offset: {
      offset: [0, 7],
    },
    arrow: {
      padding: 12,
    },
    arrowOffset: 4,
  })
  .slot('Tooltip', {
    bg: 'gray84',
    color: 'white',
    px: 16,
    py: 10,
    rounded: 10,
  })
  .slot('Arrow', {
    width: 10,
    height: 10,
    rounded: 2,
  })
  .slot('Close', {})
  .build()
