import React from 'react'
import { renderDOM, renderThemed } from '../../../test'
import { Portal } from './'
import '@testing-library/jest-dom'

describe('Portal', () => {
  it('renders portal when active', () => {
    const { container, getByText } = renderThemed(<Portal><div>text</div></Portal>)
    expect(container).toBeEmptyDOMElement()
    expect(getByText('text')).toBeTruthy()
  })
  it('renders children directly when inactive', () => {
    const wrapped = <div>text</div>
    expect(renderDOM(<Portal active={false}>{wrapped}</Portal>)).toEqual(renderDOM(wrapped))
  })
})
