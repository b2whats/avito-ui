import { bool, maybe, mockProps } from '../../../../core/test'
import { ListItemProps } from './contract'

export const listMock = mockProps<ListItemProps>(() => [{
  onClick: maybe(() => {}),
}, {
  disabled: bool,
}], {
  browserBase: {
    label: 'Текст лейбла',
  },
})
