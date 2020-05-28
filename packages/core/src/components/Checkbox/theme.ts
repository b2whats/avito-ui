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
    Icon: {},
    Switch: {
      style: {
        color: 'white',
        bgDisabled: 'gray4',
      },
    },
    Label: {},
    Toggle: {},
  },
}
