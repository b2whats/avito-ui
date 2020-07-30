import { CardTheme, dsl } from '@avito/core'


export const bannerTheme = dsl.theme<CardTheme>()
  .slot('Card')
  .slot('Close')
  .slot('Image', {
    props: {
      p: 0,
    },
  })
  .slot('Content', slot => [
    {
      props: {
        p: 16,
        pt: 10,
      },
    },
    slot.if('image', {
      props: {
        pr: 8,
      },
    }),
    slot.if('column', {
      props: {
        p: 10,
      },
    }),
  ])
  .build()
