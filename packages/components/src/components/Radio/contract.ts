import { ToggleProps } from '../Toggle/contract'

export type RadioProps = Omit<ToggleProps, 'children' | 'scheme' | 'className' | 'mode' | 'indeterminate'>