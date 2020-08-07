import { dsl, LinkTheme } from '@avito/core'

export const linkTheme = dsl.theme<LinkTheme>()
  .slot('Link', slot => [
    {
      colorVisited: 'purple600',
    },
    slot.switch('variant', {
      primary: {
        color: 'blue500',
        colorHover: 'red500',
      },
      secondary: {
        color: 'gray52',
        colorHover: 'gray32',
      },
    }),
  ])
  .build()
