import { ToggleProps } from '../Toggle/contract'

export type CheckboxProps = Omit<ToggleProps, 'children' | 'className' | 'mode' | 'loading' | 'shape'>
