import { ToggleProps } from '../Toggle/contract'

export type SwitcherProps = Omit<ToggleProps, 'children' | 'theme' | 'className' | 'mode'>