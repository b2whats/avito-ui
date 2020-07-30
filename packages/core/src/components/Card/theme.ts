import { ComponentTheme, Slot } from '../../styled-system/'
import { dsl } from '../../theme'
import { IconProps } from '../Icon/'
import { CrossIcon } from '../Icon/icons/'
import { ImageProps } from '../Image/'
import { BoxProps, StackProps } from '../Layout/'
import { CardProps } from './contract'

export type CardTheme = ComponentTheme<CardProps, {
  Card: Slot<BoxProps>
  Close: Slot<IconProps>
  Image: Slot<ImageProps | IconProps>
  Content: Slot<StackProps>
}>

export const cardTheme = dsl.theme<CardTheme>()
  .slot('Card', {
    block: true,
    rounded: 12,
  })
  .slot('Close', {
    component: CrossIcon,
    color: 'gray28',
    bgHover: 'black8',
    bgActive: 'black16',
    position: 'absolute',
    size: 's',
    p: 8,
    rounded: 'circle',
    top: 4,
    right: 4,
  })
  .slot('Image', {
    order: props => props.column ? 0 : 1,
  })
  .slot('Content', {
    p: 12,
  })
  .build()
