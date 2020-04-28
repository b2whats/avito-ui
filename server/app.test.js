import React from 'react'
import { mount } from '@avito/ct'
import App from './App'

describe('Avito-Site', () => {
  it('Скриншоы', async () => {
    const wrapper = mount(<App />)

    expect(await wrapper.screenshot()).toMatchSnapshotImage()
  })
})