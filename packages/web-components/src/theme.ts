import { web } from '@avito/tokens'
import { buttonTheme } from './components/Button/theme'
import { inputTheme } from './components/Input/theme'
import { iconTheme } from './components/Icon/theme'
import { textTheme } from './components/Text/theme'
import { textareaTheme } from './components/Textarea/theme'

export const theme = {
  ...web,
  Button: buttonTheme,
  Icon: iconTheme,
  Input: inputTheme,
  Text: textTheme,
  Textarea: textareaTheme,
}
