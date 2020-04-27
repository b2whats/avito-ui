import { mergeTheme, Theme } from '@avito/core'
import { web } from '@avito/tokens'
import { buttonTheme } from './components/Button/theme'
import { inputTheme } from './components/Input/theme'

export const theme = mergeTheme(web as Theme, {
  Button: buttonTheme,
  Icon: {
    // @ts-ignore - временно, пока не будет найдено решения передачи выбранной темы в примеры
    platform: 'web',
  },
  Input: inputTheme,
})
