import { CheckboxProps } from './contract'
import { ToggleTheme } from '../Toggle'

export type CheckboxTheme = ToggleTheme<CheckboxProps>

export const checkboxTheme: CheckboxTheme = {
  defaultProps: {
    shape: 'square',
    variant: 'primary',
    size: 'm',
  },
  scheme: {
    Switch: {},
    Icon: {},
    Label: {},
    Toggle: {},
  },
}
