import { CardTheme, dsl } from '@avito/core'


export const bannerTheme = dsl.theme<CardTheme>()
  .slot('Image', {
    p: 0,
  })
  .slot('Content', slot => [
    {
      p: 16,
      pt: 10,
    },
    slot.if('image', {
      pr: 8,
    }),
    slot.if('column', {
      p: 10,
    }),
  ])
  .build()
