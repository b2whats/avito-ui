import { mockProps, maybe, sml } from '../../../test'
import { BadgeProps } from './contract'

export const badgeMock = mockProps<BadgeProps>(() => [{
  size: sml,
  kind: maybe('flat'),
}], {
  browserBase: {
    count: 10,
  } as any,
  browserSets: [{
    count: [0, 10, 999],
  }, {
    gap: [true],
    // otherwise we won't see the gap
    gapColor: ['yellow100'],
    gapSize: maybe(4),
  }],
})
