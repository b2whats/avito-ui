import { SchemeType } from '../../styled-system/'
import { dsl } from '../../theme'
import { TextProps } from './contract'

export type TextTheme = {
  scheme: {
    Text: SchemeType<TextProps, TextProps>,
  },
}

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
      preset: dsl.propMap('as', {
        'title': 'h1',
        'title-small': 'h2',
        'heading-large': 'h3',
        'heading': 'h4',
        'heading-small': 'h5',
      } as const),
    },
  },
}