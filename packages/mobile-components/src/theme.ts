import { Theme, mergeTheme } from '@avito/core/theme'
import { mobile } from '@avito/tokens'
import { ListItemTheme } from './components/List'
import { SegmentButtonTheme } from './components/SegmentButton'

declare module '@avito/core/theme' {
  interface Theme {
    ListItem: Partial<ListItemTheme>
    SegmentButton: Partial<SegmentButtonTheme>
  }
}

export const theme = mergeTheme(mobile as Theme, {})
