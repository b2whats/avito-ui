import { ComponentTheme, Slot } from '../../styled-system/'
import { dsl } from '../../theme'
import { ImageProps } from './contract'

export type ImageTheme = ComponentTheme<ImageProps, {
  Image: Slot
}>

export const imageTheme = dsl.theme<ImageTheme>().build()
