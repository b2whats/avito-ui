import { observable, action } from 'mobx'

type Theme = 'web' | 'mobile'

export const store = observable({
  theme: 'mobile' as Theme,
  setTheme(theme: Theme) {
    this.theme = theme
  },
}, {
  setTheme: action,
})
;(window as any).store = store