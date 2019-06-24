import { tokens, Tokens } from '@avito/tokens'
import * as components from './components'

export type ComponentTheme<T> = (baseToken: Tokens) => T

export const createTheme = (baseToken: Tokens) => {
  return {
    ...baseToken,
    button: components.buttonTheme(baseToken)
  }
}

export const theme = createTheme(tokens)