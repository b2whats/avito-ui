import { variant, sml, mockProps } from '../../../test'
import { SpinnerProps } from './contract'

export const spinnerMock = mockProps<SpinnerProps>(() => [{
  size: sml,
}, {
  variant,
}])
