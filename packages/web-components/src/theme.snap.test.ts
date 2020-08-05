import { mergeTheme, Theme, toggleTheme, checkboxTheme, radioTheme, switcherTheme } from '@avito/core'
import { describeTheme } from '../../core/test'
import * as components from '.'
import { mocks } from './mockProps'
import { theme } from './theme'

const withToggle = (override: any) => mergeTheme(toggleTheme, theme.Toggle, override)
const describeNamedTheme = (name: keyof Theme, baseTheme?: any, mockOptions?: any) => {
  baseTheme = baseTheme || components[name].baseTheme
  describeTheme(name, mergeTheme(baseTheme, theme[name]), mocks[name](mockOptions))
}

describe('web theme', () => {
  describeNamedTheme('Avatar')
  describeNamedTheme('Badge')
  describeNamedTheme('Button')
  describeNamedTheme('Card')
  describeNamedTheme('Image')

  describeNamedTheme('Icon')
  describeNamedTheme('Spinner')

  describeNamedTheme('Input')
  describeNamedTheme('Textarea')

  describeNamedTheme('Checkbox', withToggle(checkboxTheme))
  describeNamedTheme('Radio', withToggle(radioTheme))
  describeNamedTheme('Switcher', withToggle(switcherTheme))

  describeNamedTheme('Text')
  describeNamedTheme('Link')
})
