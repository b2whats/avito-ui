import { Slot, ComponentTheme } from '../../styled-system/'
import { dsl } from '../../theme'
import { IconProps } from '../Icon/contract'
import { CrossIcon } from '../Icon/icons/'
import { TextProps } from '../Text/contract'
import { InputProps } from './contract'

export type InputTheme = ComponentTheme<InputProps, {
  IconBefore: Slot<IconProps>
  InputField: Slot
  Prefix: Slot<TextProps>
  Input: Slot
  Postfix: Slot<TextProps>
  IconAfter: Slot<IconProps>
}>

export const inputTheme = dsl.theme<InputTheme>()
  .defaultProps({
    variant: 'primary',
    size: 'm',
    deletePlaceholderOnFocus: true,
  })
  .slot('IconBefore', {
    props: {
      color: 'gray28',
      size: ({ size }) => size === 'l' ? 'm' : 's',
    },
  })
  .slot('IconAfter', slot => [
    {
      props: {
        color: 'gray28',
      },
    },
    slot.if('clearable', {
      component: CrossIcon,
      props: {
        area: 10,
        size: ({ size }) => size === 'l' ? 'm' : 's',
      },
    }),
  ])
  .slot('Prefix')
  .slot('Postfix', {
    props: {
      ml: 4,
    },
  })
  .slot('InputField')
  .slot('Input', {
    style: {
      focus: true,
      height: ({ size }) => size,
    },
  })
  .build()
