import { Theme } from '@avito/core/theme/contract'
import { ListItemTheme } from '../components/List/theme'
import { SegmentButtonTheme } from '../components/SegmentButton/theme'

export interface MobileTheme extends Theme {
  ListItem: Partial<ListItemTheme>
  SegmentButton: Partial<SegmentButtonTheme>
}
