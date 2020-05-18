import { mergeTheme, Theme } from '@avito/core'
import { web } from '@avito/tokens'
import { CrossIcon } from './icons'
import { buttonTheme } from './components/Button/theme'
import { inputTheme } from './components/Input/theme'

export const theme = mergeTheme(web as Theme, {
  Button: buttonTheme,
  Icon: {
    // @ts-ignore - временно, пока не будет найдено решения передачи выбранной темы в примеры
    platform: 'web',
    scheme: {
      Icon: {
        size: {
          l: {
            style: {
              height: 28,
            },
          },
        },
      },
    },
  },
  Input: inputTheme,
  Textarea: {
    scheme: {
      IconClear: {
        component: CrossIcon,
      },
    },
  },
})
