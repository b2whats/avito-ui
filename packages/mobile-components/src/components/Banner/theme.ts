import { CardTheme, dsl } from '@avito/core'


export const bannerTheme = dsl.theme<CardTheme>()
  .slot('Card')
  .slot('Close')
  .slot('Image', {
    props: {
      p: 0,
    },
  })
  .slot('Content', {
    props: {
      p: 16,
      pt: 10,
    },
    image: {
      props: {
        pr: 8,
      },
    },
    column: {
      props: {
        p: 10,
      },
    },
  })
  .build()
