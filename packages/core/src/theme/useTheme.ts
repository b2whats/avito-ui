import { useContext, Context } from 'react'
import { ThemeContext } from '@emotion/core'
import { Theme } from './contract'

export const useTheme = () => useContext(ThemeContext as Context<Theme>)