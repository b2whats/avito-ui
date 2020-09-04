import { mockProps, maybe, sml, bool, variant } from '../../../test'
import { PointProps } from './contract'

export const pointMock = mockProps<PointProps>(() => [{
  size: [...sml, 3],
}, {
  variant,
}], {
  browserSets: [{
    show: maybe(bool),
    count: [0, 2],
  }, {
    gap: [true],
    // otherwise we won't see the gap
    gapColor: ['yellow100'],
    gapSize: maybe(4),
  }],
})
