import { bool, mockProps } from '../../../test'
import { CardProps } from './contract'

export const cardMock = mockProps<CardProps>(() => [{
  column: bool,
}], {
  browserBase: {
    bg: 'yellow100',
    width: 200,
    children: [
      'hello',
      'i am a card',
    ],
  },
})
