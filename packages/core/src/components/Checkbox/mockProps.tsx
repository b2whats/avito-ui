import { bool, variant, sml, mockProps } from '../../../test'
import { CheckboxProps } from './contract'

export const checkboxMock = mockProps<CheckboxProps>(() => [{
  checked: bool,
  indeterminate: bool,
}, {
  checked: bool,
  variant,
}, {
  size: sml,
}])
