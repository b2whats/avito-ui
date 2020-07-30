import { dsl } from '../../theme'
import { CardTheme } from '../Card/theme'

export const bannerTheme = dsl.theme<CardTheme>()
  .slot('Card', {})
  .slot('Close', {})
  .slot('Image', {
    p: 4,
  })
  .slot('Content', slot => [
    {
      p: 32,
      pt: 28,
    },
    slot.if('column', {
      p: 16,
      pt: 12,
    }),
  ])
  .build()
