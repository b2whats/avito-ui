import { bool, maybe } from '../../../../core/test'

export const listMock = () => [{
  onClick: maybe(() => {}),
}, {
  disabled: bool,
}]
