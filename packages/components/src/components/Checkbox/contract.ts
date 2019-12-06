import { TogglerProps } from '../Toggler/contract'

export interface CheckboxProps extends Omit<TogglerProps, 'children'> {
  variant?: string,
}