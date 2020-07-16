import React from 'react'
import { renderThemed, fireEvent } from '../../../test'
import { Group } from '../Layout'
import { Radio } from './'

describe('Radio', () => {
  it('toggles in group', () => {
    const onChange = jest.fn()
    const { getByLabelText } = renderThemed(
      <Group mode='radio' value={0} onChange={onChange}>
        <Radio value={0} label='option 0' />
        <Radio value={1} label='option 1' />
      </Group>
    )
    fireEvent.click(getByLabelText('option 1'))
    expect(onChange).toBeCalledTimes(1)
    expect(onChange.mock.calls[0][0]).toMatchObject({ value: 1 })
  })
})
