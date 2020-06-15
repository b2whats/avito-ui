import { ThemeContext } from '@emotion/core'
import { useContext, Context } from 'react'
import { Theme } from './contract'

export const useTheme = () => useContext(ThemeContext as Context<Theme>)
