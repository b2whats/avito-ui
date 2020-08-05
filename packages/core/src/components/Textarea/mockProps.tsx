import { variant, bool, sml, mockProps } from '../../../test'
import { TextareaProps } from './contract'

export const textareaMock = mockProps<TextareaProps>(() => [{
  clearable: bool,
}, {
  size: sml,
}, {
  variant,
}], {
  browserBase: {
    width: 200,
  } as any,
})
