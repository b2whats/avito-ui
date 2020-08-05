import { variant, bool, sml, mockProps } from '../../../test'
import { RadioProps } from './contract'

export const radioMock = mockProps<RadioProps>(() => [{
  variant,
  checked: bool,
}, {
  size: sml,
}])
