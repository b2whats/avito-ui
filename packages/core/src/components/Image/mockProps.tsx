import { mockProps, girlImgSrc } from '../../../test'
import { ImageProps } from './contract'

export const imageMock = mockProps<ImageProps>(null, {
  browserBase: {
    src: girlImgSrc,
  },
})
