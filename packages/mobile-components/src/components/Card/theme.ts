import { CardTheme, DeepPartial } from '@avito/core'


export const cardTheme: DeepPartial<CardTheme> = {
  scheme: {
    Card: {
      props: {
        rounded: 5,
      },
    },
    Close: {
      props: {
        p: 4,
      },
    },
    Image: {},
    Content: {
      props: {
        p: 10,
      },
    },
  },
}
