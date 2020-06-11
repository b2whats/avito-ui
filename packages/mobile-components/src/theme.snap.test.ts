import {
  mergeTheme,
  foldThemeParams,
  buttonTheme,
  inputTheme,
  textTheme,
  checkboxTheme,
  toggleTheme,
  textareaTheme,
  radioTheme,
  switcherTheme
} from '@avito/core'
import { theme } from './theme'

const variant = ['primary', 'secondary', 'success', 'error', 'warning']
const withToggle = (override: any) => mergeTheme(toggleTheme, theme.Toggle, override)

describe('mobile theme', () => {
  it('button theme snap', () => {
    expect(mergeTheme(buttonTheme, theme.Button)).toMatchSnapshot()
  })
  it('input theme snap', () => {
    expect(mergeTheme(inputTheme, theme.Input)).toMatchSnapshot()
  })
  it('text theme snap', () => {
    expect(mergeTheme(textTheme, theme.Text)).toMatchSnapshot()
  })

  describeTheme('checkbox', withToggle(mergeTheme(checkboxTheme, theme.Checkbox)), {
    variant,
    checked: [true, false],
    shape: ['circle', 'square'],
  })

  describeTheme('radio', withToggle(mergeTheme(radioTheme, theme.Radio)), {
    variant,
    checked: [true, false],
  })

  describeTheme('switcher', withToggle(mergeTheme(switcherTheme, theme.Switcher)), {
    variant,
    checked: [true, false],
    loading: [true, false],
  })

  describeTheme('textarea', mergeTheme(textareaTheme, theme.Textarea), {
    variant,
    clearable: [true, false],
    size: ['s', 'm', 'l'],
  })
})

function describeTheme(name: string, theme: any, propValues: { [K: string]: any[] }) {
  describe(name, () => {
    it('snap', () => expect(theme).toMatchSnapshot())
    it('fuzz', () => fuzz(propValues, theme))
  })
}

function cartesian<T extends { [K: string]: any[] }>(valuesByKey: T): { [K in keyof T]: any }[] {
  let res: any[] = [{}]
  Object.entries(valuesByKey).forEach(([key, values]) => {
    res = values.reduce(
      (acc, value) => [...acc, ...res.map(item => ({ ...item, [key]: value }))],
      [])
  })
  return res
}

function fuzz(propValues: { [K: string]: any[] }, theme: any) {
  cartesian(propValues).forEach(props => {
    expect(foldThemeParams(props, theme)).toMatchSnapshot(JSON.stringify(props))
  })
}
