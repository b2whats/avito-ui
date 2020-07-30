import { dsl } from '../../theme'
import { CardTheme } from '../Card/theme'

export const bannerTheme = dsl.theme<CardTheme>()
  .slot('Card', {})
  .slot('Close', {})
  .slot('Image', {
    props: {
      p: 4,
    },
  })
  .slot('Content', slot => [
    {
      props: {
        p: 32,
        pt: 28,
      },
    },
    slot.if('column', {
      props: {
        p: 16,
        pt: 12,
      },
    }),
  ])
  .build()
