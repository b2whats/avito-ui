import { CardTheme, dsl } from '@avito/core'

export const cardTheme = dsl.theme<CardTheme>()
  .slot('Card', {
    rounded: 5,
  })
  .slot('Close', {
    p: 4,
  })
  .slot('Image')
  .slot('Content', {
    p: 10,
  })
  .build()
