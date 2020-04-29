import { theme as mobile } from '@avito/mobile-components'
import { theme as web, pikTheme } from '@avito/web-components'

export const themes = {
  mobile: {
    platformTheme: mobile,
    themes: {
      default: {
        icon: 'mobile',
        theme: {},
      },
    },
  },
  web: {
    platformTheme: web,
    themes: {
      default: {
        icon: 'web',
        theme: {},
      },
      pik: {
        icon: 'home',
        theme: pikTheme,
      },
    },
  },
}
