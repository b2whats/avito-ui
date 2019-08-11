import { tokens, Tokens } from '@avito/tokens'
import * as components from './components'

export type Tokens = Tokens

export type ComponentsTheme = {
  text: components.TextTheme,
  button: components.ButtonTheme,
  link: components.LinkTheme,
  icon: components.IconTheme,
}

export interface ComputedsTheme extends Tokens {
  variants: components.VariantsTheme,
}

export const createTheme = (baseToken: Tokens, overrides: Partial<ComponentsTheme & ComputedsTheme> = {}) => {
  const computed: ComputedsTheme = {
    ...baseToken,
    variants: components.variantsTheme(baseToken, overrides.variants),
  }

  const tokens = {
    ...baseToken,
    ...computed,
    button: components.buttonTheme(computed, overrides.button),
    text: components.textTheme(computed, overrides.text),
    link: components.linkTheme(computed, overrides.link),
    icon: components.iconTheme(computed, overrides.icon),
  } 

  return tokens
}

export const theme = createTheme(tokens)
export type Theme = typeof theme

export type ComponentTheme<T> = (tokens: ComputedsTheme, overrides?: Partial<T>) => T
export type ComputedTheme<T> = (baseToken: Tokens, overrides?: Partial<T>) => T