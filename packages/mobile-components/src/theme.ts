import { mobile } from '@avito/tokens'
import { Theme } from '@avito/core'
import { ListItemTheme } from './components/List/'
import { SegmentButtonTheme } from './components/SegmentButton/'
import { buttonTheme } from './components/Button/theme'
import { iconTheme } from './components/Icon/theme'
import { checkboxTheme } from './components/Checkbox/theme'
import { inputTheme } from './components/Input/theme'
import { radioTheme } from './components/Radio/theme'
import { switcherTheme } from './components/Switcher/theme'
import { textTheme } from './components/Text/theme'
import { textareaTheme } from './components/Textarea/theme'
import { toggleTheme } from './components/Toggle/theme'

declare module '@avito/core' {
  interface Theme {
    ListItem: Partial<ListItemTheme>
    SegmentButton: Partial<SegmentButtonTheme>
  }
}

export const theme = {
  ...(mobile as Theme),
  Button: buttonTheme,
  Checkbox: checkboxTheme,
  Icon: iconTheme,
  Input: inputTheme,
  Radio: radioTheme,
  Switcher: switcherTheme,
  Text: textTheme,
  Textarea: textareaTheme,
  Toggle: toggleTheme,
}
