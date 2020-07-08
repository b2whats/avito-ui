import { render } from '@testing-library/react/pure'
import React, { ReactElement, ReactNode } from 'react'
// eslint-disable-next-line
import { ThemeProvider } from '../src/theme'

export const renderThemed = ((ui: ReactElement, options: any) => {
  return render(ui, { wrapper: ThemeProvider, ...options })
}) as typeof render

export const renderDOM = (ui: ReactElement) => renderThemed(ui).container.firstElementChild!

const SLOT_VARIANTS = {
  div: true,
  function: true,
  string: true,
}
export const testSlot = (
  render: (slot: ReactNode) => ReactElement,
  options: Partial<typeof SLOT_VARIANTS> = {}
) => () => {
  options = { ...SLOT_VARIANTS, ...options }
  const anchor = '__slot__'
  options.function && it('accepts function slot', () => {
    const slot = jest.fn(() => <div data-testid={anchor} />)
    const { getByTestId } = renderThemed(render(slot))
    expect(slot).toBeCalled()
    expect(getByTestId(anchor)).toBeTruthy()
  })
  options.div && it('accepts react element', () => {
    const InnerComponent = () => <div data-testid={anchor} />
    const { getByTestId } = renderThemed(render(<InnerComponent />))
    expect(getByTestId(anchor)).toBeTruthy()
  })
  options.string && it('accepts string', () => {
    const { getByText } = renderThemed(render(anchor))
    expect(getByText(anchor)).toBeTruthy()
  })
}

export * from '@testing-library/react/pure'
