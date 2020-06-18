import { ToggleTheme } from '../Toggle'
import { CheckboxProps } from './contract'

export type CheckboxTheme = ToggleTheme<CheckboxProps>

export const checkboxTheme: CheckboxTheme = {
  defaultProps: {
    shape: 'square',
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
