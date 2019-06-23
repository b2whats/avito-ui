import { tokens } from '@avito/tokens'
import * as components from './components'

// type ComponentTheme = {
//   [key: string]: string,
// }
// const componentTheme: ComponentTheme = {}

// export const registerComponentTheme = (name: string, create: (baseToken: typeof tokens) => void) => {
//   componentTheme[name] = create
// }

export const createTheme = (baseToken: typeof tokens) => {
  return {
    ...baseToken,
    button: components.buttonTheme(baseToken)
  }
}

export const theme = createTheme(tokens)