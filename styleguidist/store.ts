import { observable, action } from 'mobx'
import { themes } from './themes'
import { Theme } from '@avito/core'

export type Platform = 'web' | 'mobile'
export const store = observable({
  platform: 'mobile' as Platform,
  themeName: 'default',
  theme: {} as Partial<Theme>,
  setTheme(platform: Platform, themeName: string) {
    this.platform = platform
    this.themeName = themeName
    this.theme = themes[platform].themes[themeName].theme
  },
  updateTheme(theme: Partial<Theme>) {
    this.theme = theme
  },
}, {
  setTheme: action,
  updateTheme: action,
})
;(window as any).store = store