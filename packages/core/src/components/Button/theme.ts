import { ComponentTheme, Slot } from '../../styled-system/'
import { dsl } from '../../theme'
import { IconProps } from '../Icon/contract'
import { SpinnerProps } from '../Spinner/contract'
import { TextProps } from '../Text/contract'
import { ButtonProps } from './contract'


export type ButtonTheme = ComponentTheme<ButtonProps, {
  Button: Slot
  IconBefore: Slot<IconProps>
  Text: Slot<TextProps>
  IconAfter: Slot<IconProps>
  Spinner: Slot<SpinnerProps>
}>

export const buttonTheme: ButtonTheme = dsl.theme<ButtonTheme>()
  .defaultProps({
    size: 'm',
    type: 'button',
  })
  // FIXME: can't expand shorthands of createClassName maps
  .mapProps(({ shape }) => (shape === 'circle' || shape === 'square') ? { p: 'none' } : {})
  .slot('Spinner', {
    size: props => props.size,
  })
  .slot('IconBefore', {
    size: props => props.size === 'l' ? 'm' : 's',
  })
  .slot('IconAfter', {
    size: props => props.size === 'l' ? 'm' : 's',
  })
  .slot('Text', slot => [
    {
      crop: true,
      valignSelf: 'middle',
      size: 'm',
      ml: -1,
    },
    slot.if('iconBefore', {
      ml: 6,
    }),
    slot.if('iconAfter', {
      mr: 6,
    }),
  ])
  .slot('Button', slot => [
    {
      shrink: false,
      borderRadius: 5,
      px: 16,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'transparent',
      focus: false,
      minHeight: props => props.size,
      py: slot.mapped('size', { s: 4, m: 6, l: 8 }),
      userSelect: false,
    },
    slot.if(props => props.iconBefore && props.children, {
      pl: 12,
    }),
    slot.if(props => props.iconAfter && props.children, {
      pr: 12,
    }),
  ])
  .build()
