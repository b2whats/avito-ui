import { useContext, Context } from 'react'
import { ThemeContext } from '@emotion/core'
import { Tokens } from '@avito/tokens'

export const useTheme = () => useContext(ThemeContext as Context<Tokens>)

export const useThemeMemo = <F extends (...args: any) => any, T>(createComponentTheme: F, override: T) => {
  const theme = useContext(ThemeContext as Context<Tokens>)

  const componentTheme = createComponentTheme(theme, override)

  return [theme, componentTheme] as [typeof theme, ReturnType<F>]
}