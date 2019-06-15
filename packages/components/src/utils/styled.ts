import { Context, useContext } from 'react'
import styled, { CreateStyled } from '@emotion/styled'
import { ThemeContext } from '@emotion/core'
import { theme } from '../theme'

type Theme = typeof theme

export const useTheme = () => useContext(ThemeContext as Context<Theme>)
export default styled as CreateStyled<Theme>
