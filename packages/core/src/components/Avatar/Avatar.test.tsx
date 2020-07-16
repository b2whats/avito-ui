import React from 'react'
import { renderThemed, renderDOM, fireEvent } from '../../../test'
import { Avatar } from './'

describe('Avatar', () => {
  describe('click', () => {
    it('handles click', () => {
      const onClick = jest.fn()
      fireEvent.click(renderDOM(<Avatar size={20} onClick={onClick} />))
      expect(onClick).toBeCalledTimes(1)
    })
  })

  describe('as-prop', () => {
    it('accepts custom as-component', () => {
      const Inner = jest.fn(({ children, to }) => <a href={to}>{children}</a>)
      renderThemed(<Avatar as={Inner} size={20} to='/' />)
      expect(Inner).toBeCalled()
      expect(Inner.mock.calls[0][0].to).toBe('/')
    })
  })

  describe('ARIA roles', () => {
    it('uses img role by default', () =>
      expect(renderDOM(<Avatar size={20} />).getAttribute('role')).toBe('img'))
    it('uses button role if onClick provided', () =>
      expect(renderDOM(<Avatar size={20} onClick={() => {}} />).getAttribute('role')).toBe('button'))
    it('sets aria-disabled', () => {
      expect(renderDOM(<Avatar size={20} />).getAttribute('aria-disabled')).toBeFalsy()
      expect(renderDOM(<Avatar size={20} disabled />).getAttribute('aria-disabled')).toBeTruthy()
    })
  })

  describe('fallback', () => {
    const fail = (container: HTMLElement) => fireEvent.error(container.querySelector('img')!)
    const mockSrc = '/hello'
    it('shows children', () => {
      const { container, getByText } = renderThemed(<Avatar src={mockSrc} alt='Peter' size={20}>A</Avatar>)
      fail(container)
      expect(getByText('A')).toBeTruthy()
    })
    it('shows alt if children missing', () => {
      const { container, getByText } = renderThemed(<Avatar src={mockSrc} size={20} alt='Alex' />)
      fail(container)
      expect(getByText('A')).toBeTruthy()
    })
    it('resets after src change', () => {
      const { container, rerender, asFragment } = renderThemed(<Avatar src={mockSrc} size={20} alt='peter' />)
      const firstRender = asFragment()
      fail(container)
      rerender(<Avatar size={20} src='hello' alt='peter' />)
      expect(asFragment()).toMatchObject(firstRender)
    })
  })
})
