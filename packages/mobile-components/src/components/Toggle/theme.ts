import { DeepPartial, ToggleTheme } from '@avito/core'

export const toggleTheme: DeepPartial<ToggleTheme> = {
  scheme: {
    Label: {
      labelPosition: {
        start: {
          props: {
            mr: 16,
          },
        },
        end: {
          props: {
            ml: 16,
          },
        },
      },
      disabled: {
        props: {
          color: 'gray48',
        },
      },
    },
  },
}
