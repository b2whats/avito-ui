import deepmerge from 'deepmerge'
import { DeepPartial } from '../utils/types'

const cache = new WeakMap()
const defaultKey = {}

export const mergeTheme = <T extends object>(
  defaultTheme: T,
  globalOverride: DeepPartial<T> = defaultKey,
  localOverride: DeepPartial<T> = defaultKey
): T & { mapProps: T extends { mapProps?: (p: infer Props) => any } ? (p: Props) => Props : never } => {
  let cursor = cache

  if (!cursor.has(defaultTheme)) {
    cursor.set(defaultTheme, new WeakMap())
  }
  cursor = cursor.get(defaultTheme)

  if (!cursor.has(globalOverride)) {
    cursor.set(globalOverride, new WeakMap())
  }
  cursor = cursor.get(globalOverride)

  if (!cursor.has(localOverride)) {
    cursor.set(localOverride, mergeThemes([defaultTheme, globalOverride, localOverride]))
  }

  return cursor.get(localOverride)
}

function mergeThemes(themes: any[]) {
  const res = deepmerge.all(themes)
  res['mapProps'] = themes.map(t => t ? t.mapProps : null).reduce((composed, map) => {
    return map ? (props: any) => ({ ...props, ...map(composed(props)) }) : composed
  }, (props: any) => props)
  return res
}
