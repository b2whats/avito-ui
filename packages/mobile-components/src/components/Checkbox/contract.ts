import { ToggleProps } from '../Toggle/contract'
import { CheckboxTheme } from './theme'

export type CheckboxProps = Omit<ToggleProps, 'children' | 'className' | 'mode'> & {
  /** Квадратная, круглая форма */
  shape?: 'square' | 'circle'
  
  override?: CheckboxTheme
}