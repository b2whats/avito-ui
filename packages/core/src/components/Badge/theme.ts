import { ComponentTheme, Slot } from '../../styled-system'
import { dsl } from '../../theme'
import { BadgeProps } from './contract'

export type BadgeTheme = ComponentTheme<BadgeProps, {
  Badge: Slot
}>

const sizes = { s: 14, m: 20, l: 24 }
export const badgeTheme = dsl.theme<BadgeTheme>()
  .defaultProps({
    kind: 'fill',
    animateChange: 'slide',
  })
  .mapProps((props) => ({
    // only filled badge has default size
    size: props.kind === 'flat' ? undefined : 'm',
    ...props,
  }))
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

      bold: true,
      align: 'center',
    }),
    slot.if(props => props.kind === 'fill' && !props.count, {
      shape: 'circle',
    }),
  ])
  .build()
