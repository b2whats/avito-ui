import { mergeTheme, Theme } from '@avito/core'
import * as components from '..'
import { describeTheme, sml } from '../../../core/test'
import { mocks } from '../mockProps'
import { theme as webTheme } from '../theme'
import { pikTheme } from './pik'

const describeNamedTheme = (name: keyof Theme, baseTheme?: any, mockOptions?: any) => {
  baseTheme = baseTheme || components[name].baseTheme
  describeTheme(name, mergeTheme(baseTheme, webTheme[name], pikTheme[name]), mocks[name](mockOptions))
}

describe('pik theme', () => {
  describeNamedTheme('Button')
  describeNamedTheme('Input')
  describeNamedTheme('Textarea')
  describeTheme('Select', mergeTheme((components.Select as any).baseTheme, pikTheme.Select), [{ size: sml }])
  describeNamedTheme('Text')
})
