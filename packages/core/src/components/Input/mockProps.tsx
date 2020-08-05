import { variant, sml, icon, maybe, mockProps } from '../../../test'
import { InputProps } from './contract'

export const inputMock = mockProps<InputProps>(() => [{
  size: sml,
  iconBefore: maybe(icon),
  iconAfter: maybe(icon),
}, {
  size: sml,
  clearable: [true],
}, {
  variant,
}], {
  browserBase: {
    width: 200,
  } as any,
})
