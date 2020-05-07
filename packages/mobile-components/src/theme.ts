import { CrossIcon } from './icons'
import { Theme, mergeTheme } from '@avito/core'
import { mobile } from '@avito/tokens'
import { ListItemTheme } from './components/List/'
import { SegmentButtonTheme } from './components/SegmentButton/'
import { buttonTheme } from './components/Button/theme'
import { iconTheme } from './components/Icon/theme'
import { inputTheme } from './components/Input/theme'
import { textTheme } from './components/Text/theme'

declare module '@avito/core' {
  interface Theme {
    ListItem: Partial<ListItemTheme>
    SegmentButton: Partial<SegmentButtonTheme>
  }
}

export const theme = mergeTheme(mobile as Theme, {
  Button: buttonTheme,
  Icon: iconTheme,
  Input: inputTheme,
  Text: textTheme,
  Textarea: {
    scheme: {
      IconClear: {
        component: CrossIcon,
      },
    },
  },
})
