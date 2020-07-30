import { CardTheme, dsl } from '@avito/core'

export const alertTheme = dsl.theme<CardTheme>()
  .slot('Card', {
    px: 16,
    pt: 10,
    pb: 12,
  })
  .slot('Close', {})
  .slot('Image', {
    size: 20,
    mr: 12,
  })
  .slot('Content', {})
  .build()
