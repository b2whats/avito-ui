import { dsl, TooltipTheme } from '@avito/core'
import { CrossIcon } from '../Icon/'

export const tooltipTheme = dsl.theme<TooltipTheme>()
  .defaultProps({
    offset: {
      offset: [0, 10],
    },
    arrow: {
      padding: 10,
    },
    arrowOffset: 4,
  })
  .slot('Tooltip', slot => [
    {
      bg: 'white',
      p: 16,
      shadow: '0 5px 17px 0 rgba(0,0,0,.15)',
    },
    slot.switch('preset', {
      attention: {
        bg: 'blue100',
      },
      dark: {
        bg: 'gray84',
        color: 'white',
        rounded: 'm',
      },
    }),
  ])
  .slot('Arrow', {
    width: 10,
    height: 10,
  })
  .slot('Close', {
    component: CrossIcon,
    position: 'absolute',
    right: 0,
    top: 0,
    size: 's',
  })
  .build()
