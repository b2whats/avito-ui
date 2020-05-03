import { ToggleProps } from '../Toggle/contract'
import { CheckboxTheme } from './theme'

export type CheckboxProps = Omit<ToggleProps, 'children' | 'className' | 'mode'> & {
  /** Переопределиь тему компонента */
  override?: CheckboxTheme
}