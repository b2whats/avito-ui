import { DeepPartial, ToggleTheme } from '@avito/core'

export const toggleTheme: DeepPartial<ToggleTheme> = {
  scheme: {
    Label: {
      labelPosition: {
        start: {
          props: {
            mr: p => p.size === 's' ? 6 : 8,
          },
        },
        end: {
          props: {
            ml: p => p.size === 's' ? 6 : 8,
          },
        },
      },
    },
  },
}
