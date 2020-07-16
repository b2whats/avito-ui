import React from 'react'
import { renderThemed, fireEvent } from '../../../test'
import { Input } from './'

describe.skip('Input', () => {
  it('fires formatted change event', () => {
    const onChange = jest.fn()
    const { getByRole } = renderThemed(<Input name='__name__' onChange={onChange} />)
    const target = getByRole('textbox')
    fireEvent.change(target, { target: { value: '444' } })
    expect(onChange.mock.calls.map(call => call[0])).toMatchObject([{
      name: '__name__',
      target: target,
      value: '444',
    }])
  })
})
