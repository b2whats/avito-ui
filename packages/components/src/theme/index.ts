import { Tokens as _Tokens } from '@avito/tokens'
import * as components from './components'

export type Tokens = _Tokens

export type ComponentsTheme = {
  text: components.TextTheme,
  button: components.ButtonTheme,
  // link: components.LinkTheme,
  icon: components.IconTheme,
  spinner: components.SpinnerTheme,
  // toggleBox: components.ToggleBoxTheme,
  // inputBox: components.InputBoxTheme,
  checkbox: components.CheckboxTheme,
  checkmark: components.CheckmarkTheme,
  radio: components.RadioTheme,
  switcher: components.SwitcherTheme,
  // variants: components.VariantsTheme,
  input: components.InputTheme,
  textarea: components.TextareaTheme,
  // checkbox: components.CheckboxTheme,
}
console.log('11', components)

type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;

export const createTheme = (baseToken: Tokens, overrides: DeepPartial<ComponentsTheme> = {}) => ({
  ...baseToken,
  button: components.buttonTheme(baseToken, overrides.button),
  text: components.textTheme(baseToken, overrides.text),
  // link: components.linkTheme(baseToken, overrides.link),
  icon: components.iconTheme(baseToken, overrides.icon),
  spinner: components.spinnerTheme(baseToken, overrides.spinner),
  // toggleBox: components.toggleBoxTheme(baseToken, overrides.toggleBox),
  // inputBox: components.inputBoxTheme(baseToken, overrides.inputBox),
  checkbox: components.checkboxTheme(baseToken, overrides.checkbox),
  checkmark: components.checkmarkTheme(baseToken, overrides.checkmark),
  radio: components.radioTheme(baseToken, overrides.radio),
  switcher: components.switcherTheme(baseToken, overrides.switcher),
  // variants: components.variantsTheme(baseToken, overrides.variants),
  input: components.inputTheme(baseToken, overrides.input),
  textarea: components.textareaTheme(baseToken, overrides.textarea),
  // checkbox: components.checkboxTheme(baseToken, overrides.checkbox),
})

export type Theme = ReturnType<typeof createTheme>

export type ComponentTheme<T> = (tokens: Tokens, overrides?: DeepPartial<T>) => T