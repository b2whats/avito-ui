import { tokens, Tokens } from '@avito/tokens'
import * as components from './components'

export type Tokens = Tokens

export type ComponentsTheme = {
  text: components.TextTheme,
  button: components.ButtonTheme,
  link: components.LinkTheme,
  icon: components.IconTheme,
  toggleBox: components.ToggleBoxTheme,
  inputBox: components.InputBoxTheme,
  checkbox: components.CheckboxTheme,
  variants: components.VariantsTheme,
}

type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;

export interface ComputedsTheme extends Tokens {
  // variants: components.VariantsTheme,
}

// export const createTheme = (baseToken: Tokens, overrides: DeepPartial<ComponentsTheme> & DeepPartial<ComputedsTheme> = {}) => {
export const createTheme = (baseToken: Tokens, overrides: DeepPartial<ComponentsTheme> = {}) => {
  const computed: Tokens = {
    ...baseToken,
  }

  const tokens = {
    ...computed,
    button: components.buttonTheme(computed, overrides.button),
    text: components.textTheme(computed, overrides.text),
    link: components.linkTheme(computed, overrides.link),
    icon: components.iconTheme(computed, overrides.icon),
    toggleBox: components.toggleBoxTheme(computed, overrides.toggleBox),
    inputBox: components.inputBoxTheme(computed, overrides.inputBox),
    checkbox: components.checkboxTheme(computed, overrides.checkbox),
    variants: components.variantsTheme(computed, overrides.variants),
  } 

  return tokens
}

export const theme = createTheme(tokens)
export type Theme = typeof theme

export type ComponentTheme<T> = (tokens: ComputedsTheme, overrides?: DeepPartial<T>) => T
export type ComputedTheme<T> = (baseToken: Tokens, overrides?: DeepPartial<T>) => T