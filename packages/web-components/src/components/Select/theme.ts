import { InputTheme, CastThemeProps, dsl } from '@avito/core'
import { SelectProps } from './contract'

export type SelectTheme = CastThemeProps<InputTheme, SelectProps>
export const selectTheme = dsl.theme<SelectTheme>()
  .slot('Input', {
    style: {
      // клик должен проваливаться на <select>
      pointerEvents: false,
    },
  })
  .build()
