import { tokens, Tokens } from '@avito/tokens'
import * as components from './components'

export type Tokens = Tokens

export type ComponentTheme<T> = (baseToken: Tokens, overrides?: Partial<T>) => T

export type ComponentsTheme = {
  text: components.TextTheme,
  button: components.ButtonTheme,
  link: components.LinkTheme,

  variants: components.VariantsTheme,
}

export const createTheme = (baseToken: Tokens, overrides: Partial<ComponentsTheme> = {}) => {

  return {
    ...baseToken,
    variants: components.variantsTheme(baseToken, overrides.variants),
    button: components.buttonTheme(baseToken, overrides.button),
    text: components.textTheme(baseToken, overrides.text),
    link: components.linkTheme(baseToken, overrides.link),
  } 
}

export const theme = createTheme(tokens)
export type Theme = typeof theme