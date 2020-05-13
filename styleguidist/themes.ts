import { theme as mobile } from '@avito/mobile-components'
import { theme as web, pikTheme } from '@avito/web-components'
import { MobileIcon, WebIcon, HomeIcon } from '@avito/icons'


export const themes = {
  mobile: {
    platformTheme: mobile,
    themes: {
      default: {
        icon: MobileIcon,
        theme: {},
      },
    },
  },
  web: {
    platformTheme: web,
    themes: {
      default: {
        icon: WebIcon,
        theme: {},
      },
      pik: {
        icon: HomeIcon,
        theme: pikTheme,
      },
    },
  },
}
