import { CardTheme, DeepPartial } from '@avito/core'

export const alertTheme: DeepPartial<CardTheme> = {
  scheme: {
    Card: {
      props: {
        pt: 10,
        pb: 12,
        pl: 16,
        pr: 16,
      },
    },
    Close: {
      props: {

      },
    },
    Image: {
      props: {
        size: 20,
        mr: 12,
      },
    },
    Content: {},
  },
}
