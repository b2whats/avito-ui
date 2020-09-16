import type { Theme } from '@avito/core'
import { mobile } from '@avito/tokens'
import { alertTheme } from './components/Alert/theme'
import { avatarTheme } from './components/Avatar/theme'
import { bannerTheme } from './components/Banner/theme'
import { buttonTheme } from './components/Button/theme'
import { cardTheme } from './components/Card/theme'
import { checkboxTheme } from './components/Checkbox/theme'
import { CheckmarkTheme } from './components/Checkmark'
import { iconTheme } from './components/Icon/theme'
import { inputTheme } from './components/Input/theme'
import { linkTheme } from './components/Link/theme'
import { ListItemTheme } from './components/List/'
import { radioTheme } from './components/Radio/theme'
import { SegmentButtonTheme } from './components/SegmentButton/'
import { switcherTheme } from './components/Switcher/theme'
import { textTheme } from './components/Text/theme'
import { textareaTheme } from './components/Textarea/theme'
import { toggleTheme } from './components/Toggle/theme'
import { tooltipTheme } from './components/Tooltip/theme'

declare module '@avito/core' {
  interface Theme {
    ListItem: ListItemTheme
    SegmentButton: SegmentButtonTheme
    Checkmark: CheckmarkTheme
  }
}

export const theme: Partial<Theme> = {
  ...mobile,
  Alert: alertTheme,
  Avatar: avatarTheme,
  Banner: bannerTheme,
  Button: buttonTheme,
  Card: cardTheme,
  Checkbox: checkboxTheme,
  Icon: iconTheme,
  Input: inputTheme,
  Radio: radioTheme,
  Switcher: switcherTheme,
  Text: textTheme,
  Textarea: textareaTheme,
  Toggle: toggleTheme,
  Tooltip: tooltipTheme,
  Link: linkTheme,
}
