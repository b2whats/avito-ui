import { CastThemeProps } from '../../styled-system/'
import { dsl } from '../../theme'
import { RadioCheckedIcon } from '../Icon/icons/'
import { ToggleTheme } from '../Toggle'
import { RadioProps } from './contract'

export type RadioTheme = CastThemeProps<ToggleTheme, RadioProps>

export const radioTheme = dsl.theme<RadioTheme>()
  .slot('Switch', {
    style: {
      color: 'white',
      bgDisabled: 'gray4',
    },
  })
  .slot('Icon', {
    checked: {
      component: RadioCheckedIcon,
    },
  })
  .build()
