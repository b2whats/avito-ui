import { useContext, Context } from 'react'
import { ThemeContext } from '@emotion/core'
import { Theme } from './contract'

export default () => {
  const theme = useContext(ThemeContext as Context<Theme>)

  if (theme === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  
  return theme
}