import { bool, mockProps } from '../../../test'
import { BannerProps } from './contract'

export const bannerMock = mockProps<BannerProps>(() => [{
  column: bool,
}])
