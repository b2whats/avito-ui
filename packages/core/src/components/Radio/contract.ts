import { ToggleProps } from '../Toggle/contract'

export type RadioProps = Omit<ToggleProps, 'children' | 'className' | 'mode' | 'indeterminate'>
