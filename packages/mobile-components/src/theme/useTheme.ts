import { useContext, Context } from 'react'
import { ThemeContext } from '@emotion/core'
import { Theme } from './contract'

export default () => useContext(ThemeContext as Context<Theme>)