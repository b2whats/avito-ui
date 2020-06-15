import { Slot, ComponentTheme } from '../../styled-system/'
import { dsl } from '../../theme'
import { TextProps } from './contract'

export type TextTheme = ComponentTheme<TextProps, { Text: Slot }>

export const textTheme: TextTheme = {
  scheme: {
    Text: {
      style: {
        lineHeight: 'normal',
        fontSize: p => p.size,
      },
      dense: {
        style: {
          lineHeight: 'dense',
        },
      },
      variant: dsl.styleMap('color', {
        primary: 'blue500',
        secondary: 'gray52',
        error: 'red500',
        success: 'green500',
        warning: 'yellow500',
      }),
    },
  },
}
