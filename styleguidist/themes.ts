import { theme as mobile } from '@avito/mobile-components'
import { theme as web, pikTheme } from '@avito/web-components'

export const themes = [{
  name: 'mobile',
  platform: 'mobile',
  platformTheme: { ...mobile, _demo: {} },
  title: 'Мav',
  theme: undefined,
}, {
  name: 'web',
  platform: 'web',
  platformTheme: { ...web, _demo: {} },
  title: 'Веб',
  theme: undefined,
}, {
  name: 'pik',
  platform: 'web',
  platformTheme: { ...web, _demo: {} },
  title: 'Пик',
  theme: pikTheme,
}] as const
