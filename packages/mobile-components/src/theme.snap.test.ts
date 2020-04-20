import { mergeTheme } from '@avito/core/theme'
import { buttonTheme } from '@avito/core/components/Button/theme'
import { theme } from './theme'

describe('mobile theme', () => {
  it('button theme snap', () => {
    expect(mergeTheme(buttonTheme, theme.Button)).toMatchSnapshot()
  })
})
