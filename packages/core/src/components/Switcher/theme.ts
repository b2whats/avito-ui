import { CastThemeProps } from '../../styled-system/'
import { dsl } from '../../theme'
import { ToggleTheme } from '../Toggle'
import { SwitcherProps } from './contract'

export type SwitcherTheme = CastThemeProps<ToggleTheme, SwitcherProps>

export const switcherTheme = dsl.theme<SwitcherTheme>()
  .defaultProps({
    positionLoading: false,
  })
  .build()
