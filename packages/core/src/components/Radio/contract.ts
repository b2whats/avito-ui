import { ToggleProps } from '../Toggle/contract'
import { RadioTheme } from './theme'

export type RadioProps = Omit<ToggleProps, 'children' | 'className' | 'mode' | 'indeterminate'> & {
  /** Переопределиь тему компонента */
  override?: RadioTheme
}