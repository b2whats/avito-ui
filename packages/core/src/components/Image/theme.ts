import { ComponentTheme, Slot } from '../../styled-system/'
import { dsl } from '../../theme'
import { ImageProps } from './contract'

export type ImageTheme = ComponentTheme<ImageProps, {
  Image: Slot
}>

export const imageTheme = dsl.theme<ImageTheme>()
  .slot('Image', {
    maxWidth: 1,
    height: 'auto',
  })
  .build()
