import { ComponentTheme } from '../../styled-system'
import { dsl } from '../../theme'
import { BadgeProps } from './contract'

export type BadgeTheme = ComponentTheme<BadgeProps>

export const badgeTheme = dsl.theme<BadgeTheme>()
  .defaultProps({
    gapSize: 2,
    gapColor: 'white',
  })
  .build()
