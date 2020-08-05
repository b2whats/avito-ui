import { variant, maybe, sml, mockProps } from '../../../test'
import { TextareaProps } from './contract'

export const textareaMock = mockProps<TextareaProps>(() => [{
  value: maybe('value'),
  clearable: maybe('always'),
}, {
  size: sml,
}, {
  variant,
}], {
  browserBase: {
    width: 200,
    placeholder: 'placeholder',
  } as any,
  browserSets: [{
    rows: [1],
  }, {
    resizable: [true],
  }, {
    autoSize: [true],
    rows: [1],
    value: ['1\n2\n3\n4'],
  }, {
    value: ['value'],
    variant,
    disabled: [true],
  }],
})
