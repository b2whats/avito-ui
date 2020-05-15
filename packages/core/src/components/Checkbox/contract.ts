import { ToggleProps } from '../Toggle/contract'
import { CheckboxTheme } from './theme'

export type CheckboxProps = Omit<ToggleProps, 'children' | 'className' | 'mode' | 'loading'> & {
  /** Переопределиь тему компонента */
  override?: CheckboxTheme
}