import React from 'react'
import { bool, mockProps, maybe, icon, variant } from '../../../test'
import { Text } from '../Text'
import { AlertProps } from './contract'

export const alertMock = mockProps<AlertProps>(() => [{
  column: bool,
}, {
  variant,
}], {
  browserBase: {
    children: [<Text key='0'>hello</Text>, <Text key='1'>i am a card</Text>],
  },
  browserSets: [{
    column: bool,
    image: maybe(icon),
  }, {
    onClose: [() => {}],
  }],
})
