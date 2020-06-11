import { Slot, ComponentTheme } from '../../styled-system'
import { LinkProps } from './contract'

export type LinkTheme = ComponentTheme<LinkProps, {
  Link: Slot<LinkProps>
}>

export const linkTheme: LinkTheme = {
  defaultProps: {
    variant: 'primary',
  },
  scheme: {
    Link: {
      props: {},
      variant: {}, // Пустые объекты определяют порядок мержа
    },
  },
}
