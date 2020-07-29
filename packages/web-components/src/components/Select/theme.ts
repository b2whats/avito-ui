import { DeepPartial, InputTheme, CastThemeProps } from '@avito/core'
import { SelectProps } from './contract'

export type SelectTheme = DeepPartial<CastThemeProps<InputTheme, SelectProps>>
export const selectTheme: SelectTheme = {
  scheme: {
    Input: {
      style: {
        // клик должен проваливаться на <select>
        pointerEvents: false,
      },
    },
  },
}
