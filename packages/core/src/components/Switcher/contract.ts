import { ToggleProps } from '../Toggle/contract'

export interface SwitcherProps extends Omit<ToggleProps, 'children' | 'className' | 'mode' | 'indeterminate'> {
  /** сдвигать checked + loading вправо */
  positionLoading?: boolean,
}
