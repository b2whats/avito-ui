import { mockProps, sml, maybe, bool, icon } from '../../../test'
import { ButtonProps } from './contract'

export const buttonMock = mockProps<ButtonProps, { buttonPresets: string[] }>(({
  buttonPresets,
}) => [{
  size: sml,
  iconBefore: maybe(icon),
  iconAfter: maybe(icon),
  children: maybe('text'),
}, {
  children: ['text'],
  preset: buttonPresets as any,
  checked: bool,
  loading: bool,
}])
