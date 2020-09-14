import React from 'react'
import { variant, maybe, mockProps } from '../../../test'
import { TextProps } from './contract'

export const textMock = mockProps<TextProps>(() => [{
  size: maybe(['xxxl', 'xxl', 'xl', 'l', 'm', 's', 'xs']),
}, {
  variant,
}, {
  dense: [true],
}, {
  preset: ['heading', 'heading-large', 'heading-small', 'title', 'title-small'],
}], {
  browserBase: {
    children: <>hello<br />i am text</>,
  },
  browserSets: [{
    children: ['text'],
    underline: [true],
    width: [300],
  }, {
    children: ['text'],
    strike: [true, 'red300'],
    width: [300],
  }],
})
