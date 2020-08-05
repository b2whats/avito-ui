import { variant, sml, icon, maybe } from '../../../test'

export const inputMock = () => [{
  size: sml,
  iconBefore: maybe(icon),
  iconAfter: maybe(icon),
}, {
  size: sml,
  clearable: [true],
}, {
  variant,
}]
