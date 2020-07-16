import { CardTheme } from '../Card/theme'

export const bannerTheme: CardTheme = {
  scheme: {
    Card: {},
    Close: {},
    Image: {
      props: {
        p: 4,
      },
    },
    Content: {
      props: {
        pt: 28,
        pr: 32,
        pb: 32,
        pl: 32,
      },
      column: {
        props: {
          pt: 12,
          pr: 16,
          pb: 16,
          pl: 16,
        },
      },
    },
  },
}
