/// <reference types="cypress" />
// import 'cypress-plugin-snapshots'
import { Theme, mergeTheme } from '@avito/core'
import { describePropFuzz } from '@avito/core/test'
import { theme as webTheme } from '../'
import * as components from '../'
import { mocks } from '../mockProps'
import { pikTheme } from './pik'

const theme = mergeTheme(webTheme, pikTheme)

const descibeNamedComponent = (name: keyof Theme, component = components[name]) => {
  describePropFuzz(name, component, theme, mocks[name]())
}

describe('mobile components', () => {
  descibeNamedComponent('Button')
  descibeNamedComponent('Input')
  descibeNamedComponent('Textarea')
  descibeNamedComponent('Text')
})
