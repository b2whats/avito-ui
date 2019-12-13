import { Tokens as _Tokens } from '@avito/tokens'
import * as components from './components'

export type Tokens = _Tokens

export type ComponentsTheme = {
  text: components.TextTheme,
  button: components.ButtonTheme,
  // link: components.LinkTheme,
  icon: components.IconTheme,
  spinner: components.SpinnerTheme,
  checkbox: components.CheckboxTheme,
  radio: components.RadioTheme,
  switcher: components.SwitcherTheme,
  input: components.InputTheme,
  textarea: components.TextareaTheme,
  toggle: components.ToggleTheme,
  segmentButton: components.SegmentButtonTheme,
}

type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;

export const createTheme = (baseToken: Tokens, overrides: DeepPartial<ComponentsTheme> = {}) => ({
  ...baseToken,
  button: components.buttonTheme(baseToken, overrides.button),
  text: components.textTheme(baseToken, overrides.text),
  // link: components.linkTheme(baseToken, overrides.link),
  icon: components.iconTheme(baseToken, overrides.icon),
  spinner: components.spinnerTheme(baseToken, overrides.spinner),
  checkbox: components.checkboxTheme(baseToken, overrides.checkbox),
  radio: components.radioTheme(baseToken, overrides.radio),
  switcher: components.switcherTheme(baseToken, overrides.switcher),
  input: components.inputTheme(baseToken, overrides.input),
  textarea: components.textareaTheme(baseToken, overrides.textarea),
  toggle: components.toggleTheme(baseToken, overrides.toggle),
  segmentButton: components.segmentButtonTheme(baseToken, overrides.segmentButton),
})

export type Theme = ReturnType<typeof createTheme>

export type ComponentTheme<T> = (tokens: Tokens, overrides?: DeepPartial<T>) => T