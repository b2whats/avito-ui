import { ToggleTheme, dsl } from '@avito/core'

export const toggleTheme = dsl.theme<ToggleTheme>()
  .slot('Label', slot => [
    slot.switch('labelPosition', {
      start: {
        mr: 16,
      },
      end: {
        ml: 16,
      },
    }),
    slot.if('disabled', {
      color: 'gray48',
    }),
  ])
  .build()
