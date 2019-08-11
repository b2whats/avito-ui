import { Context } from 'react'
import styled, { CreateStyled } from '@emotion/styled'
import { ThemeContext as _ThemeContext } from '@emotion/core'
import { theme } from '../theme'

type Theme = typeof theme

export const ThemeContext = _ThemeContext as Context<Theme>
export default styled as CreateStyled<Theme>
