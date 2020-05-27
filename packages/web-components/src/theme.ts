import { web } from '@avito/tokens'
import { buttonTheme } from './components/Button/theme'
import { checkboxTheme } from './components/Checkbox/theme'
import { inputTheme } from './components/Input/theme'
import { iconTheme } from './components/Icon/theme'
import { radioTheme } from './components/Radio/theme'
import { textTheme } from './components/Text/theme'
import { switcherTheme } from './components/Switcher/theme'
import { textareaTheme } from './components/Textarea/theme'
import { toggleTheme } from './components/Toggle/theme'
import { tooltipTheme } from './components/Tooltip/theme'

export const theme = {
  ...web,
  Button: buttonTheme,
  Checkbox: checkboxTheme,
  Icon: iconTheme,
  Input: inputTheme,
  Radio: radioTheme,
  Switcher: switcherTheme,
  Text: textTheme,
  Textarea: textareaTheme,
  Toggle: toggleTheme,
  Tooltip: tooltipTheme,
}
