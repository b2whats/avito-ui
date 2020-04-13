import { Theme, mergeTheme } from '@avito/core'
import { mobile } from '@avito/tokens'
import { ListItemTheme } from './components/List/'
import { SegmentButtonTheme } from './components/SegmentButton/'
import { buttonTheme } from './components/Button/theme'

declare module '@avito/core' {
  interface Theme {
    ListItem: Partial<ListItemTheme>
    SegmentButton: Partial<SegmentButtonTheme>
  }
}

export const theme = mergeTheme(mobile as Theme, {
  Button: buttonTheme,
})
