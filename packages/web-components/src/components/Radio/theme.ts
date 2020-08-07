import { RadioTheme, dsl } from '@avito/core'

export const radioTheme = dsl.theme<RadioTheme>()
  .slot('Switch', slot => ({
    height: slot.mapped('size', { s: 18, m: 22, l: 24 }),
  }))
  .build()
