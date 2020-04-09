import '@avito/core/theme'
import { ListItemTheme } from './components/List'
import { SegmentButtonTheme } from './components/SegmentButton'

declare module '@avito/core/theme' {
  interface Theme {
    ListItem: Partial<ListItemTheme>
    SegmentButton: Partial<SegmentButtonTheme>
  }
}
