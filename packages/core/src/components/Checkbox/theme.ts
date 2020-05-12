import { CheckboxIndeterminateIcon, CheckboxCheckedIcon } from '../Icon/'
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
    Icon: {
      checked: {
        component: CheckboxCheckedIcon,
      },
      indeterminate: {
        component: CheckboxIndeterminateIcon,
      },
    },
    Label: {},
    Toggle: {},
  },
}
