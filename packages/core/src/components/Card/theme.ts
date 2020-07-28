import { ComponentTheme, Slot } from '../../styled-system/'
import { IconProps } from '../Icon/'
import { CrossIcon } from '../Icon/icons/'
import { ImageProps } from '../Image/'
import { BoxProps } from '../Layout/'
import { CardProps } from './contract'

export type CardTheme = ComponentTheme<CardProps, {
  Card: Slot<BoxProps>
  Close: Slot<IconProps>
  Image: Slot<ImageProps>
  Content: Slot<BoxProps>
}>

export const cardTheme: CardTheme = {
  scheme: {
    Card: {
      props: {
        block: true,
        rounded: 12,
      },
    },
    Close: {
      component: CrossIcon,
      props: {
        color: 'gray28',
        bgHover: 'black8',
        bgActive: 'black16',
        position: 'absolute',
        size: 's',
        p: 8,
        rounded: 'circle',
        top: 4,
        right: 4,
      },
    },
    Image: {
      props: {
        order: 1,
      },
      column: {
        props: {
          order: 0,
        },
      },
    },
    Content: {
      props: {
        p: 12,
      },
    },
  },
}
