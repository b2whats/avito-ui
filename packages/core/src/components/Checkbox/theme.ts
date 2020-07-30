import { CastThemeProps } from '../../styled-system'
import { dsl } from '../../theme'
import { ToggleTheme } from '../Toggle'
import { CheckboxProps } from './contract'

export type CheckboxTheme = CastThemeProps<ToggleTheme, CheckboxProps>

export const checkboxTheme = dsl.theme<CheckboxTheme>()
  .slot('Icon')
  .slot('Switch')
  .slot('Label')
  .slot('Toggle')
  .build()
