import { Slot, ComponentTheme } from '../../styled-system/'
import { dsl } from '../../theme'
import { TextProps } from './contract'

export type TextTheme = ComponentTheme<TextProps, { Text: Slot }>

export const textTheme = dsl.theme<TextTheme>()
  .slot('Text', slot => [{
    style: {
      lineHeight: 'normal',
      fontSize: props => props.size,
      color: slot.mapped('variant', {
        primary: 'blue500',
        secondary: 'gray52',
        error: 'red500',
        success: 'green500',
        warning: 'yellow500',
      }),
    },
  }, slot.if('dense', {
    style: {
      lineHeight: 'dense',
    },
  })])
  .build()
