import { CardTheme, DeepPartial } from '@avito/core'


export const bannerTheme: DeepPartial<CardTheme> = {
  scheme: {
    Card: {},
    Close: {},
    Image: {
      props: {
        p: 0,
      },
    },
    Content: {
      props: {
        pt: 10,
        pb: 16,
        pl: 16,
        pr: 16,
      },
      image: {
        props: {
          pr: 8,
        },
      },
      column: {
        props: {
          py: 10,
          px: 10,
        },
      },
    },
  },
}
