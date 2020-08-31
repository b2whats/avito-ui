import React from 'react'
import { renderThemed, fireEvent } from '../../../test'
import { InputNumber } from './'

const callValue = (changeMock: jest.Mock) => changeMock.mock.calls[0][0].value
describe('InputNumber', () => {
  describe('arrow control', () => {
    it('works', () => {
      const onChange = jest.fn()
      const target = renderThemed(<InputNumber value={9} onChange={onChange} />).getByRole('textbox')

      fireEvent.keyDown(target, { key: 'ArrowUp' })
      expect(callValue(onChange)).toEqual('10')

      onChange.mockReset()
      fireEvent.keyDown(target, { key: 'ArrowDown' })
      expect(callValue(onChange)).toEqual('8')
    })

    describe('respects positive constraint', () => {
      it('does not go below zero', () => {
        const onChange = jest.fn()
        const target = renderThemed(<InputNumber value={0} onChange={onChange} />).getByRole('textbox')
        fireEvent.keyDown(target, { key: 'ArrowDown' })
        expect(callValue(onChange)).toEqual('0')
      })

      it('goes below zero when positiveOnly=false', () => {
        const onChange = jest.fn()
        const target = renderThemed(<InputNumber positiveOnly={false} value={0} onChange={onChange} />).getByRole('textbox')
        fireEvent.keyDown(target, { key: 'ArrowDown' })
        expect(callValue(onChange)).toEqual('-1')
      })
    })
  })
})
