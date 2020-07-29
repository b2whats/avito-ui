import { CastThemeProps } from '../../styled-system'
import { ToggleTheme } from '../Toggle'
import { CheckboxProps } from './contract'

export type CheckboxTheme = CastThemeProps<ToggleTheme, CheckboxProps>

export const checkboxTheme: CheckboxTheme = {
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
