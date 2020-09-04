import { once } from './once'

describe(once, () => {
  it('removes handler after first call', () => {
    const wrapper = document.createElement('div')
    const button = document.createElement('button')
    wrapper.appendChild(button)

    const handler = jest.fn()
    wrapper.addEventListener('click', once(handler))

    button.click()
    expect(handler).toBeCalledTimes(1)

    button.click()
    expect(handler).toBeCalledTimes(1)
  })
})
