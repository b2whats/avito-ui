import React from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { tokens, Tokens } from '@avito/tokens'
import { mergeTheme } from './mergeTheme'
import { useTheme } from './useTheme'

type ProviderProps = { children: React.ReactNode, defaultTheme?: Tokens, theme?: Partial<Tokens> }

export function ThemeProvider({ defaultTheme = tokens, theme, children }: ProviderProps) {
  const globalTheme = useTheme()
  const currentTeme = mergeTheme(defaultTheme, globalTheme, theme)
  
  return (
    <EmotionThemeProvider theme={currentTeme}>
      {children}
    </EmotionThemeProvider>
  )
}