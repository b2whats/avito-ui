import { Tokens } from '@avito/tokens'
import * as components from './components'

export type Tokens = Tokens

export type ComponentsTheme = {
  text: components.TextTheme,
  button: components.ButtonTheme,
  // link: components.LinkTheme,
  icon: components.IconTheme,
  spinner: components.SpinnerTheme,
  // toggleBox: components.ToggleBoxTheme,
  input: components.InputTheme,
  textarea: components.TextareaTheme,
  // checkbox: components.CheckboxTheme,
}

type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;

export const createTheme = (baseToken: Tokens, overrides: DeepPartial<ComponentsTheme> = {}) => ({
  ...baseToken,
  button: components.buttonTheme(baseToken, overrides.button),
  text: components.textTheme(baseToken, overrides.text),
  // link: components.linkTheme(baseToken, overrides.link),
  icon: components.iconTheme(baseToken, overrides.icon),
  spinner: components.spinnerTheme(baseToken, overrides.spinner),
  // toggleBox: components.toggleBoxTheme(baseToken, overrides.toggleBox),
  input: components.inputTheme(baseToken, overrides.input),
  textarea: components.textareaTheme(baseToken, overrides.textarea),
  // checkbox: components.checkboxTheme(baseToken, overrides.checkbox),
})

export type Theme = ReturnType<typeof createTheme>

export type ComponentTheme<T> = (tokens: Tokens, overrides?: DeepPartial<T>) => T