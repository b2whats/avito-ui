import { mergeTheme } from '@avito/core'
import { buttonTheme, inputTheme } from '@avito/core'
import { theme } from './theme'

describe('mobile theme', () => {
  it('button theme snap', () => {
    expect(mergeTheme(buttonTheme, theme.Button)).toMatchSnapshot()
  })
  it('input theme snap', () => {
    expect(mergeTheme(inputTheme, theme.Input)).toMatchSnapshot()
  })
})
