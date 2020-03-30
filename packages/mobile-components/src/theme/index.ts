import { Tokens as _Tokens } from '@avito/tokens'

export type Tokens = _Tokens

export type ComponentsTheme = {
  // link: components.LinkTheme,
}

type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;

export const createTheme = (baseToken: Tokens, overrides: DeepPartial<ComponentsTheme> = {}) => ({
  ...baseToken,
})

export type Theme = ReturnType<typeof createTheme>

export type ComponentTheme<T> = (tokens: Tokens, overrides?: DeepPartial<T>) => T

export { default as createComponentTheme } from './createComponentTheme'
export { useTheme, useThemeMemo } from './useTheme'
export { default as styled } from '@emotion/styled'
