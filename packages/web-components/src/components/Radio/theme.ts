import { RadioTheme, dsl } from '@avito/core'

export const radioTheme = dsl.theme<RadioTheme>()
  .slot('Switch', slot => slot.switch('size', dsl.styleMap('height', {
    s: 18,
    m: 22,
    l: 24,
  })))
  .build()
