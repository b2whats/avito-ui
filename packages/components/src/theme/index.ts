import { Tokens } from '@avito/tokens'
import * as components from './components'

export type Tokens = Tokens

export type ComponentsTheme = {
  text: components.TextTheme,
  // button: components.ButtonTheme,
  // link: components.LinkTheme,
  icon: components.IconTheme,
  // toggleBox: components.ToggleBoxTheme,
  // inputBox: components.InputBoxTheme,
  // checkbox: components.CheckboxTheme,
  // variants: components.VariantsTheme,
}

type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;

export const createTheme = (baseToken: Tokens, overrides: DeepPartial<ComponentsTheme> = {}) => ({
  ...baseToken,
  // button: components.buttonTheme(baseToken, overrides.button),
  text: components.textTheme(baseToken, overrides.text),
  // link: components.linkTheme(baseToken, overrides.link),
  icon: components.iconTheme(baseToken, overrides.icon),
  // toggleBox: components.toggleBoxTheme(baseToken, overrides.toggleBox),
  // inputBox: components.inputBoxTheme(baseToken, overrides.inputBox),
  // checkbox: components.checkboxTheme(baseToken, overrides.checkbox),
  // variants: components.variantsTheme(baseToken, overrides.variants),
})

export type Theme = ReturnType<typeof createTheme>

export type ComponentTheme<T> = (tokens: Tokens, overrides?: DeepPartial<T>) => T