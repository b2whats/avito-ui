import { CardTheme, dsl } from '@avito/core'

export const cardTheme = dsl.theme<CardTheme>()
  .slot('Card', {
    props: {
      rounded: 5,
    },
  })
  .slot('Close', {
    props: {
      p: 4,
    },
  })
  .slot('Image')
  .slot('Content', {
    props: {
      p: 10,
    },
  })
  .build()
