import { ComponentTheme, Slot } from '../../styled-system/'
import { dsl } from '../../theme'
import { BaseIconProps } from './contract'

export type IconTheme = ComponentTheme<BaseIconProps, {
  Icon: Slot
}>

export const iconTheme = dsl.theme<IconTheme>()
  .slot('Icon', slot => [
    {
      valignSelf: 'middle',
      shrink: false,
      height: slot.mapped('size', {
        s: 16,
        m: 20,
        l: 24,
        xl: 28,
        auto: 1,
      }),
      color: slot.mapped('variant', {
        primary: 'blue500',
        secondary: 'gray52',
        error: 'red500',
        success: 'green500',
        warning: 'yellow500',
      }),
    },
    slot.if(props => typeof props.size !== 'string', {
      height: props => props.size as number,
    }),
  ])
  .build()
