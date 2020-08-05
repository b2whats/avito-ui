import React from 'react'
import { variant, sml, bool, mockProps } from '../../../test'
import { TextProps } from './contract'

export const textMock = mockProps<TextProps>(() => [{
  size: sml,
}, {
  variant,
}, {
  dense: bool,
}], {
  browserBase: {
    children: <>hello<br />i am text</>,
  },
})
