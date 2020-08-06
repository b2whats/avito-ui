import { sml, mockProps } from '../../../../core/test'
import { SegmentButtonProps } from './contract'

export const segmentButtonMock = mockProps<SegmentButtonProps>(() => [{
  size: sml,
}], {
  browserBase: {
    width: 300,
    options: [{ value: 1, text: 'По алфавиту' }, { value: 2, text: 'По линиям' }],
  } as any,
  browserSets: [{
    value: [2],
  }],
})
