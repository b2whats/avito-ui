import { maybe, icon, mockProps } from '@avito/core/test'
import { ListItemProps } from './contract'

export const listMock = mockProps<ListItemProps>(() => [{
  onClick: maybe(() => {}),
}, {
  disabled: [true],
}], {
  browserBase: {
    label: 'Текст лейбла',
  },
  browserSets: [{
    before: maybe(icon),
    caption: maybe('еще текст'),
    after: maybe(icon),
  }],
})
