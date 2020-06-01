import { Tokens } from '@avito/tokens'
import { AvatarTheme } from '../components/Avatar'
import { ButtonTheme } from '../components/Button/theme'
import { CheckboxTheme } from '../components/Checkbox/theme'
import { IconTheme } from '../components/Icon/theme'
import { InputTheme } from '../components/Input/theme'
import { LinkTheme } from '../components/Link/theme'
import { PositionerTheme } from '../components/Positioner/theme'
import { RadioTheme } from '../components/Radio/theme'
import { SpinnerTheme } from '../components/Spinner/theme'
import { SwitcherTheme } from '../components/Switcher/theme'
import { TextTheme } from '../components/Text/theme'
import { TextareaTheme } from '../components/Textarea/theme'
import { ToggleTheme } from '../components/Toggle/theme'
import { TooltipTheme } from '../components/Tooltip/theme'

export interface Theme extends Tokens {
  Avatar: Partial<AvatarTheme>
  Button: Partial<ButtonTheme>
  Checkbox: Partial<CheckboxTheme>
  Icon: Partial<IconTheme>
  Input: Partial<InputTheme>
  Radio: Partial<RadioTheme>
  Spinner: Partial<SpinnerTheme>
  Switcher: Partial<SwitcherTheme>
  Text: Partial<TextTheme>
  Textarea: Partial<TextareaTheme>
  Toggle: Partial<ToggleTheme>
  Positioner: Partial<PositionerTheme>
  Tooltip: Partial<TooltipTheme>
  Link: Partial<LinkTheme>
}
