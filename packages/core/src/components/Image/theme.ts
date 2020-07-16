import { ComponentTheme, Slot } from '../../styled-system/'
import { ImageProps } from './contract'

export type ImageTheme = ComponentTheme<ImageProps, {
  Image: Slot,
}>

export const imageTheme: ImageTheme = {
  scheme: {
    Image: {},
  },
}
