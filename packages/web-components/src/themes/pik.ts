import { Theme, dsl, DeepPartial } from '@avito/core'

export const pikTheme: DeepPartial<Theme> = {
  font: {
    fontFamily: 'Avito,"Helvetica Neue",Helvetica,sans-serif',
    fontSize: {
      xl: 24,
    },
    smoothing: {
      webkit: 'antialiased',
      moz: 'grayscale',
    },
  },
  Text: {
    scheme: {
      Text: {
        size: dsl.styleMap('lineHeight', {
          xs: 1.23,
          s: 1.43,
          m: 1.5,
          l: 1.4,
          xl: 1.34,
          xxl: 1.25,
          xxxl: 1.2,
        }),
      },
    },
  },
}
