import { mergeTheme } from '@avito/core'
import { buttonTheme } from '@avito/core'
import { theme } from './theme'

describe('mobile theme', () => {
  it('button theme snap', () => {
    expect(mergeTheme(buttonTheme, theme.Button)).toMatchSnapshot()
  })
})
