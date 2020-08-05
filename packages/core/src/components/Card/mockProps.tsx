import React from 'react'
import { bool, mockProps } from '../../../test'
import { Text } from '../Text'
import { CardProps } from './contract'

export const cardMock = mockProps<CardProps>(() => [{
  column: bool,
}], {
  browserBase: {
    bg: 'yellow100',
    width: 200,
    children: [<Text key='0'>hello</Text>, <Text key='1'>i am a card</Text>],
  },
  browserSets: [{
    onClose: [() => {}],
  }],
})
