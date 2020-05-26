import React, { useEffect } from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { tokens, Tokens } from '@avito/tokens'
import { isMobileSafari, DeepPartial } from '../utils/'
import { mergeTheme } from './mergeTheme'
import { useTheme } from './useTheme'
import { Theme } from './contract'

type ProviderProps = { children: React.ReactNode, defaultTheme?: Tokens, theme?: DeepPartial<Theme> }

export function ThemeProvider({ defaultTheme = tokens, theme, children }: ProviderProps) {
  const globalTheme = useTheme()
  const currentTeme = mergeTheme(defaultTheme, globalTheme, theme)

  useEffect(() => {
    // необходимо для mobile safari что бы в нем работали состояния :active
    isMobileSafari && document.body.setAttribute('ontouchstart', '')
  }, [])
  
  return (
    <EmotionThemeProvider theme={currentTeme}>
      {children}
    </EmotionThemeProvider>
  )
}