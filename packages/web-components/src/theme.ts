import { mergeTheme, Theme } from '@avito/core'
import { web } from '@avito/tokens'
import { buttonTheme } from './components/Button/theme'

export const theme = mergeTheme(web as Theme, {
  Button: buttonTheme,
})
