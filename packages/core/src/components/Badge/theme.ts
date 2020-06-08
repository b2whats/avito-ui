import { ComponentTheme } from '../../styled-system'
import { BadgeProps } from './contract'

export type BadgeTheme = ComponentTheme<BadgeProps>

export const badgeTheme: BadgeTheme = {
  defaultProps: {
    gapSize: 2,
    gapColor: 'white',
  },
  scheme: {},
}
