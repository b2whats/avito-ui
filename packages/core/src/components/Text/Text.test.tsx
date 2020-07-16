import React from 'react'
import { renderDOM } from '../../../test'
import { Text } from './'

describe('Text', () => {
  it('respects a-prop', () => {
    expect(renderDOM(<Text as='h5'>hi</Text>).tagName).toBe('H5')
  })
})
