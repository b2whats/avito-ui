import { ToggleProps } from '../Toggle/contract'
import { SwitcherTheme } from './theme'

export type SwitcherProps = Omit<ToggleProps, 'children' | 'className' | 'mode' | 'indeterminate'> & {
  /** Переопределиь тему компонента */  
  override?: SwitcherTheme
}