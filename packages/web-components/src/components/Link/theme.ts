import { dsl, LinkTheme } from '@avito/core'

export const linkTheme = dsl.theme<LinkTheme>()
  .slot('Link', {
    props: {
      colorVisited: 'purple600',
    },
    variant: {
      primary: {
        props: {
          color: 'blue500',
          colorHover: 'red500',
        },
      },
      secondary: {
        props: {
          color: 'gray52',
          colorHover: 'gray32',
        },
      },
    },
  })
  .build()
