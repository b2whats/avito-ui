import { tokens, Tokens } from '@avito/tokens'
import * as components from './components'

export type ComponentTheme<T> = (baseToken: Tokens) => T

export const createTheme = (baseToken: Tokens) => {
  return {
    ...baseToken,
    button: components.buttonTheme(baseToken),
    text: components.textTheme(baseToken),
  }
}

export const theme = createTheme(tokens)
export type Theme = typeof theme