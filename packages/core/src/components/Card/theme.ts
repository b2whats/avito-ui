import { ComponentTheme, Slot } from '../../styled-system/'
import { IconProps } from '../Icon/'
import { CrossIcon } from '../Icon/icons/'
import { BoxProps } from '../Layout/'
import { CardProps } from './contract'

export type CardTheme = ComponentTheme<CardProps, {
  Card: Slot<BoxProps>
  Close: Slot<IconProps>
}>

export const cardTheme: CardTheme = {
  scheme: {
    Card: {
      props: {
        block: true,
        rounded: 12,
        p: 12,
        pl: 20,
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
  },
}
