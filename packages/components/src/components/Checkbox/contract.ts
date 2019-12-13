import { ToggleProps } from '../Toggle/contract'

export type CheckboxProps = Omit<ToggleProps, 'children' | 'scheme' | 'className' | 'mode'> & {
  /** Квадратная, круглая форма */
  shape: 'square' | 'circle',
}