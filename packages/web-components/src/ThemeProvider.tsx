import React from 'react'
import { ThemeProvider as BaseThemeProvider } from '@avito/core/theme/ThemeProvider'
import { theme } from './theme'

export const ThemeProvider: typeof BaseThemeProvider =
  props => <BaseThemeProvider defaultTheme={ theme } { ...props } />
