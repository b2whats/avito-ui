import { dsl, TextareaTheme } from '@avito/core'

export const textareaTheme = dsl.theme<TextareaTheme>()
  .slot('Textarea', slot => [
    {
      borderRadius: 5,
      placeholderColor: 'gray48',
      color: 'black',
      colorDisabled: 'gray40',
      bg: slot.mapped('variant', {
        primary: 'gray4',
        secondary: 'gray8',
        success: 'green100',
        warning: 'orange100',
        error: 'red100',
      }),
    },
    slot.switch('size', {
      s: {
        fontSize: 12,
        px: 12,
        py: 10,
      },
      m: {
        px: 16,
        py: 12,
        fontSize: 16,
      },
      l: {
        px: 16,
        py: 16,
        fontSize: 16,
      },
    }),
  ])
  .build()
