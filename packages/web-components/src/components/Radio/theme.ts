import { DeepPartial, RadioTheme, dsl } from '@avito/core'

export const radioTheme: DeepPartial<RadioTheme> = {
  defaultProps: {
    size: 's',
  },
  scheme: {
    Switch: {
      size: dsl.styleMap('height', {
        s: 18,
        m: 22,
        l: 24,
      }),
    },
  },
}
