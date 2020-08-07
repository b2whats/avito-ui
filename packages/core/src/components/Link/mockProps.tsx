import { maybe, mockProps } from '../../../test'
import { LinkProps } from './contract'

export const linkMock = mockProps<LinkProps>(() => [{
  variant: maybe(['primary', 'secondary']),
}], {
  browserBase: {
    children: 'hello',
  },
  browserSets: [{
    noVisited: [true],
  }],
})
