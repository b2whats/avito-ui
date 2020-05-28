import { mergeTheme, foldThemeParams, CheckboxTheme } from '@avito/core'
import { buttonTheme, inputTheme, textTheme, checkboxTheme, toggleTheme } from '@avito/core'
import { theme } from './theme'

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

  describe('checkbox', () => {
    const prebuiltTheme = mergeTheme(toggleTheme as any, theme.Toggle, mergeTheme(checkboxTheme, theme.Checkbox))
    const propValues = {
      variant: ['primary', 'secondary', 'success', 'error', 'warning'],
      checked: [true, false],
      shape: ['circle', 'square'],
    }

    it('snap', () => expect(prebuiltTheme).toMatchSnapshot())
    it('fuzz', () => fuzz(propValues, prebuiltTheme))
  })
})

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