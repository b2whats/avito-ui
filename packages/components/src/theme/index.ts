import { tokens } from './tokens'
import * as components from './components'

export const createTheme = (baseToken: typeof tokens) => {
  return {
    ...baseToken,
    button: components.buttonTheme(baseToken)
  }
}

export const theme = createTheme(tokens)