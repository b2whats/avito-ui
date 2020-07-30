import { ToggleTheme, dsl } from '@avito/core'

export const toggleTheme = dsl.theme<ToggleTheme>()
  .slot('Label', {
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
  })
  .build()
