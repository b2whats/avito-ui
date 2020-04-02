import React from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import defaultTheme from '@avito/tokens'
import mergeTheme from './mergeTheme'
import useTheme from './useTheme'
import { Theme } from './contract'

const ThemeProvider: React.FunctionComponent<{ theme?: Theme }> = ({ theme, children }) => {
  const globalteme = useTheme()
  const mobileTeme = mergeTheme(defaultTheme, globalteme, theme)
  
  return (
    <EmotionThemeProvider theme={mobileTeme}>
      {children}
    </EmotionThemeProvider>
  )
}

export default ThemeProvider