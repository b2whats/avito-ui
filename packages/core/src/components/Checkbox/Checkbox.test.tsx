import React from 'react'
import { renderThemed, renderDOM, fireEvent } from '../../../test'
import { Group } from '../Layout'
import { Checkbox } from './'

describe('Сheckbox', () => {
  it('toggles', () => {
    const onChange = jest.fn()
    fireEvent.click(renderDOM(<Checkbox checked={false} onChange={onChange} />))
    expect(onChange).toBeCalledTimes(1)
    expect(onChange.mock.calls[0][0]).toMatchObject({ checked: true })
  })

  it('toggles in group', () => {
    const onChange = jest.fn()
    const { getByLabelText } = renderThemed(
      <Group mode='checkbox' value={[]} onChange={onChange}>
        <Checkbox value={0} label='option 0' />
        <Checkbox value={1} label='option 1' />
      </Group>
    )
    fireEvent.click(getByLabelText('option 0'))
    expect(onChange).toBeCalledTimes(1)
    expect(onChange.mock.calls[0][0]).toMatchObject({ value: [0] })
  })
})
