import { theme as mobile } from '@avito/mobile-components'
import { theme as web, pikTheme } from '@avito/web-components'

export const themes = [{
  name: 'mobile',
  platform: 'mobile',
  platformTheme: mobile,
  title: 'Мav',
  theme: {},
}, {
  name: 'web',
  platform: 'web',
  platformTheme: web,
  title: 'Веб',
  theme: {},
}, {
  name: 'pik',
  platform: 'web',
  platformTheme: web,
  title: 'Пик',
  theme: pikTheme,
}]
