import { theme as mobile } from '@avito/mobile-components'
import { theme as web, pikTheme, MobileIcon, WebIcon, HomeIcon } from '@avito/web-components'


export const themes = [{
  name: 'mobile',
  platform: 'mobile',
  platformTheme: mobile,
  Icon: MobileIcon,
  theme: {},
}, {
  name: 'web',
  platform: 'web',
  platformTheme: web,
  Icon: WebIcon,
  theme: {},
}, {
  name: 'pik',
  platform: 'web',
  platformTheme: web,
  Icon: HomeIcon,
  theme: pikTheme,
}]
