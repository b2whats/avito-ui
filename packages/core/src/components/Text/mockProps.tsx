import React from 'react'
import { variant, sml, mockProps } from '../../../test'
import { TextProps } from './contract'

export const textMock = mockProps<TextProps>(() => [{
  size: sml,
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
})
