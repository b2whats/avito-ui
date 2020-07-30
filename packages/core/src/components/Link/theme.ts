import { Slot, ComponentTheme } from '../../styled-system'
import { dsl } from '../../theme'
import { LinkProps } from './contract'

export type LinkTheme = ComponentTheme<LinkProps, {
  Link: Slot<LinkProps>
}>

export const linkTheme = dsl.theme<LinkTheme>()
  .defaultProps({
    variant: 'primary',
  })
  .slot('Link')
  .build()
