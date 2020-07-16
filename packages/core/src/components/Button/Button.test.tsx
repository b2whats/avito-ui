import React from 'react'
import { renderThemed, renderDOM, testSlot } from '../../../test'
import { Group } from '../Layout'
import { Button } from './'
import '@testing-library/jest-dom'

const isLoading = (node: Element) => node.getAttribute('aria-busy')

describe('Button', () => {
  describe('loading', () => {
    it('shows spinner', () => {
      expect(renderThemed(<Button loading />).getByRole('progressbar')).toBeTruthy()
    })
    it('sets aria-busy', () => {
      expect(isLoading(renderDOM(<Button />))).toBeFalsy()
      expect(isLoading(renderDOM(<Button loading />))).toBeTruthy()
    })
  })

  describe('slots', () => {
    describe('children', testSlot(children => <Button>{children}</Button>))
    describe('iconBefore', testSlot(iconBefore => <Button iconBefore={iconBefore} />, { string: false }))
    describe('iconAfter', testSlot(iconAfter => <Button iconAfter={iconAfter} />, { string: false }))
  })

  describe('link mode', () => {
    it('uses A tag if href provided', () => {
      expect(renderDOM(<Button />).tagName).toBe('BUTTON')
      expect(renderDOM(<Button href='/' />).tagName).toBe('A')
    })
  })

  describe('disabled', () => {
    it('gets disabled', () => {
      expect(renderDOM(<Button disabled>btn</Button>)).toBeDisabled()
    })
    it('inherits group disabled', () => {
      // FIXME: onChange should not affect disabled?
      const { getByRole } = renderThemed(
        <Group disabled onChange={() => {}}>
          <Button>btn</Button>
        </Group>
      )
      expect(getByRole('button')).toBeDisabled()
    })
  })
})
