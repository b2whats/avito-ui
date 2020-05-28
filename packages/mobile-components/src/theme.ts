import { mobile } from '@avito/tokens'
import { ListItemTheme } from './components/List/'
import { SegmentButtonTheme } from './components/SegmentButton/'
import { buttonTheme } from './components/Button/theme'
import { iconTheme } from './components/Icon/theme'
import { checkboxTheme } from './components/Checkbox/theme'
import { inputTheme } from './components/Input/theme'
import { textTheme } from './components/Text/theme'
import { toggleTheme } from './components/Toggle/theme'

declare module '@avito/core' {
  interface Theme {
    ListItem: Partial<ListItemTheme>
    SegmentButton: Partial<SegmentButtonTheme>
  }
}

export const theme = {
  ...mobile,
  Button: buttonTheme,
  Checkbox: checkboxTheme,
  Icon: iconTheme,
  Input: inputTheme,
  Text: textTheme,
  Toggle: toggleTheme,
}
