import { dsl, TextareaTheme } from '@avito/core'

export const textareaTheme = dsl.theme<TextareaTheme>()
  .slot('Textarea', slot => [
    {
      style: {
        borderRadius: 5,
        placeholderColor: 'gray48',
        color: 'black',
        colorDisabled: 'gray40',
      },
    },
    slot.switch('size', {
      s: {
        style: {
          fontSize: 12,
          px: 12,
          py: 10,
        },
      },
      m: {
        style: {
          px: 16,
          py: 12,
          fontSize: 16,
        },
      },
      l: {
        style: {
          px: 16,
          py: 16,
          fontSize: 16,
        },
      },
    }),
    slot.switch('variant', dsl.styleMap('bg', {
      primary: 'gray4',
      secondary: 'gray8',
      success: 'green100',
      warning: 'orange100',
      error: 'red100',
    } as const)),
  ])
  .build()
