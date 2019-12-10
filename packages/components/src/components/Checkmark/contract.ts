import { TogglerProps } from '../Toggler/contract'

export interface CheckmarkProps extends Omit<TogglerProps, 'children'> {
  variant?: string,
}