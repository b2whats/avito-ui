import { dsl, LinkTheme } from '@avito/core'

export const linkTheme = dsl.theme<LinkTheme>()
  .slot('Link', slot => [
    {
      props: {
        colorVisited: 'purple600',
      },
    },
    slot.switch('variant', {
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
    }),
  ])
  .build()
