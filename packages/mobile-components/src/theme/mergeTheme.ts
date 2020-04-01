import deepmerge from 'deepmerge'

const cache = new WeakMap()
const defaultKey = {}

const mergeTheme = <T extends object>(defaultTheme: T, globalOverride: Partial<T> = defaultKey, localOverride: Partial<T> = defaultKey): T => {
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
    cursor.set(localOverride, deepmerge.all([defaultTheme, globalOverride, localOverride]))
  }

  return cursor.get(localOverride)
}

export default mergeTheme