import { ComponentTheme, Slot } from '../../styled-system'
import { dsl } from '../../theme'
import { BoxProps } from '../Layout'
import { BadgeProps } from './contract'

export type BadgeTheme = ComponentTheme<BadgeProps, {
  Badge: Slot<BoxProps>
}>

const snapProps: (keyof BadgeProps)[] = ['top', 'right', 'bottom', 'left']
const sizes = { s: 14, m: 20, l: 24 }
export const badgeTheme = dsl.theme<BadgeTheme>()
  .defaultProps({
    gapSize: 2,
    gapColor: 'white',
    kind: 'fill',
    animateChange: 'wheel',
  })
  .mapProps(props => props.size || props.kind === 'flat' ? {} : { size: 'm' })
  .slot('Badge', slot => [
    {
      cursor: 'inherit',
      userSelect: false,
      zIndex: 2,
      fontSize: slot.mapped('size', { s: 11, m: 12, l: 14 }),
    },
    slot.if(props => props.kind === 'fill', {
      shape: 'pill',
      bg: 'red500',
      color: 'white',

      height: slot.mapped('size', sizes, size => size),
      minWidth: slot.mapped('size', sizes, size => size),
      px: slot.mapped('size', { s: 3.5, m: 6.5, l: 8 }),

      lineHeight: 'none',
      bold: true,
      valign: 'middle',
      align: 'center',
    }),
    slot.if(props => props.kind === 'fill' && !props.count, {
      shape: 'circle',
    }),
    slot.if(props => snapProps.some(prop => prop in props), {
      position: 'absolute',
    }),
  ])
  .build()
