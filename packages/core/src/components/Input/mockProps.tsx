import { variant, sml, icon, maybe, mockProps } from '../../../test'
import { InputProps } from './contract'

export const inputMock = mockProps<InputProps>(() => [{
  size: sml,
  iconBefore: maybe(icon),
  iconAfter: maybe(icon),
}, {
  value: maybe('value'),
  clearable: maybe('always'),
}, {
  variant,
}], {
  browserBase: {
    width: 200,
    placeholder: 'input',
  } as any,
  browserSets: [{
    size: sml,
    iconBefore: [icon],
    iconAfter: [icon],
    prefix: ['от'],
    postfix: ['руб'],
    value: maybe(999),
  }],
})
