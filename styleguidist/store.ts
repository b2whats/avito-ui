import { createDomain } from 'effector'
import { themes } from './themes'

export type Platform = 'web' | 'mobile'

const ThemeDomain = createDomain()

type Store = typeof themes[0]

export const setTheme = ThemeDomain.event<Store>()

export const ThemeStore = ThemeDomain.store<Store>(themes[0])
  .on(setTheme, (_, theme) => ({ ...theme }))
