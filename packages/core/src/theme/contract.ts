import { Tokens } from '@avito/tokens'
import { AvatarTheme } from '../components/Avatar/theme'
import { BadgeTheme } from '../components/Badge/theme'
import { ButtonTheme } from '../components/Button/theme'
import { CardTheme } from '../components/Card/theme'
import { CheckboxTheme } from '../components/Checkbox/theme'
import { IconTheme } from '../components/Icon/theme'
import { ImageTheme } from '../components/Image/theme'
import { InputTheme } from '../components/Input/theme'
import { LinkTheme } from '../components/Link/theme'
import { MeterTheme } from '../components/Meter/theme'
import { PositionerTheme } from '../components/Positioner/theme'
import { RadioTheme } from '../components/Radio/theme'
import { SpinnerTheme } from '../components/Spinner/theme'
import { SwitcherTheme } from '../components/Switcher/theme'
import { TextTheme } from '../components/Text/theme'
import { TextareaTheme } from '../components/Textarea/theme'
import { ToggleTheme } from '../components/Toggle/theme'
import { TooltipTheme } from '../components/Tooltip/theme'

export interface Theme extends Tokens {
  Avatar: AvatarTheme
  Alert: CardTheme
  Badge: BadgeTheme
  Banner: CardTheme
  Button: ButtonTheme
  Card: CardTheme
  Checkbox: CheckboxTheme
  Icon: IconTheme
  Image: ImageTheme
  Input: InputTheme
  Meter: MeterTheme
  Radio: RadioTheme
  Spinner: SpinnerTheme
  Switcher: SwitcherTheme
  Text: TextTheme
  Textarea: TextareaTheme
  Toggle: ToggleTheme
  Positioner: PositionerTheme
  Tooltip: TooltipTheme
  Link: LinkTheme
}
