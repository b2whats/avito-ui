import { observable, action } from 'mobx'
import { themes } from './themes'

export type Platform = 'web' | 'mobile'
export const store = observable({
  platform: themes[0].platform,
  theme: themes[0],
  setTheme(theme: typeof themes[0]) {
    this.platform = theme.platform as Platform
    this.theme = theme
  },
}, {
  setTheme: action,
})
;(window as any).store = store