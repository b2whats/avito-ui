import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import React, { useEffect } from 'react'
import { tokens } from '@avito/tokens'
import { isMobileSafari, DeepPartial } from '../utils/'
import { Theme } from './contract'
import { mergeTheme } from './mergeTheme'
import { useTheme } from './useTheme'

type ProviderProps = { children: React.ReactNode, defaultTheme?: DeepPartial<Theme>, theme?: DeepPartial<Theme> }

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
