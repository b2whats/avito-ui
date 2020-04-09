import { ToggleProps } from '../Toggle/contract'
import { SwitcherTheme } from './theme'

export type SwitcherProps = Omit<ToggleProps, 'children' | 'theme' | 'className' | 'mode'> & {
  /** Переопределиь тему компонента */  
  override?: SwitcherTheme
}