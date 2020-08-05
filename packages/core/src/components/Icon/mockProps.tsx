import { variant, sml, mockProps } from '../../../test'
import { IconProps } from './contract'

export const iconMock = mockProps<IconProps>(() => [{
  size: sml,
}, {
  variant,
}])
