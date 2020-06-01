import { ToggleProps } from '../Toggle/contract'

export type SwitcherProps = Omit<ToggleProps, 'children' | 'className' | 'mode' | 'indeterminate'>
