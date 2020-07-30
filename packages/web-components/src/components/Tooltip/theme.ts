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
  .slot('Tooltip', {
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
  })
  .slot('Arrow', {
    style: {
      width: 10,
      height: 10,
    },
  })
  .slot('Close', {
    component: CrossIcon,
    props: {
      position: 'absolute',
      right: 0,
      top: 0,
      size: 's',
    },
  })
  .build()
