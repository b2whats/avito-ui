import { variant, bool, sml, mockProps } from '../../../test'
import { SwitcherProps } from './contract'

export const switcherMock = mockProps<SwitcherProps>(() => [{
  variant,
  checked: bool,
}, {
  checked: bool,
  loading: bool,
  disabled: bool,
}, {
  size: sml,
}], {
  browserBase: {
    label: 'label',
  },
})
