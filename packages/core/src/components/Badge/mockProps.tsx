import { mockProps, maybe } from '../../../test'
import { BadgeProps } from './contract'

export const badgeMock = mockProps<BadgeProps>(() => [{
  gapSize: maybe([0, 4]),
}, {
  gapColor: maybe('red500'),
}], {
  browserBase: {
    width: 10,
    height: 10,
    bg: 'green500',
    gapColor: 'yellow100',
    shape: 'circle',
  } as any,
})
