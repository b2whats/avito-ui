import {
  mergeTheme, Theme,
  toggleTheme, checkboxTheme, radioTheme, switcherTheme,
  cardTheme, alertTheme, bannerTheme
} from '@avito/core'
import { describeTheme } from '../../core/test'
import * as components from '.'
import { mocks } from './mockProps'
import { theme } from './theme'

const withToggle = (override: any) => mergeTheme(toggleTheme, theme.Toggle, override)
const withCard = (override: any) => mergeTheme(cardTheme, (theme as any).Card, override)
const describeNamedTheme = (name: keyof Theme, baseTheme?: any, mockOptions?: any) => {
  baseTheme = baseTheme || components[name].baseTheme
  describeTheme(name, mergeTheme(baseTheme, theme[name]), mocks[name](mockOptions))
}

describe('mobile theme', () => {
  describeNamedTheme('Avatar')
  describeNamedTheme('Badge')
  describeNamedTheme('Button')
  describeNamedTheme('Image')

  describeNamedTheme('Card')
  describeNamedTheme('Alert', withCard(alertTheme))
  describeNamedTheme('Banner', withCard(bannerTheme))

  describeNamedTheme('Icon')
  describeNamedTheme('Spinner')

  describeNamedTheme('Input')
  describeNamedTheme('Textarea')

  describeNamedTheme('Checkbox', withToggle(checkboxTheme))
  describeNamedTheme('Radio', withToggle(radioTheme))
  describeNamedTheme('Switcher', withToggle(switcherTheme))

  describeNamedTheme('Text')
  describeNamedTheme('Link')

  describeNamedTheme('ListItem')
  describeNamedTheme('SegmentButton')
})
