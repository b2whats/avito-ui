import { bool, mockProps, girlImgSrc } from '../../../test'
import { AvatarProps } from './contract'

export const avatarMock = mockProps<AvatarProps>(() => [{
  isFallback: bool,
}, {
  size: [20, 45, 60],
}, {
  type: ['person', 'company', 'shop'],
}], {
  browserBase: {
    src: girlImgSrc,
  },
})
