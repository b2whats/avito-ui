import { ToggleTheme, dsl } from '@avito/core'

export const toggleTheme = dsl.theme<ToggleTheme>()
  .slot('Label', slot => [
    slot.switch('labelPosition', {
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
    }),
    slot.if('disabled', {
      props: {
        color: 'gray48',
      },
    }),
  ])
  .build()
