/// <reference types="cypress" />
// import 'cypress-plugin-snapshots'
import { Theme } from '@avito/core'
import { describePropFuzz } from '@avito/core/test'
import * as components from '.'
import { theme, UserIcon } from '.'
import { mocks } from './mockProps'

const descibeNamedComponent = (name: keyof Theme, component = components[name]) => {
  describePropFuzz(name, component, theme, mocks[name]())
}

describe('mobile components', () => {
  descibeNamedComponent('Avatar')
  descibeNamedComponent('Badge')
  descibeNamedComponent('Button')
  descibeNamedComponent('Card')
  descibeNamedComponent('Image')

  descibeNamedComponent('Icon', UserIcon)
  descibeNamedComponent('Spinner')

  descibeNamedComponent('Input')
  descibeNamedComponent('Textarea')

  descibeNamedComponent('Checkbox')
  descibeNamedComponent('Radio')
  descibeNamedComponent('Switcher')

  descibeNamedComponent('Text')
  descibeNamedComponent('Link')
})
