import deepmerge from 'deepmerge'

const cache = new WeakMap()
const defaultKey = {}

export const createComponentTheme = <T extends object>(componentName: string, componentTheme: T) =>
  (theme: any, override: Partial<T> = defaultKey): T => {
    let cursor = cache
    const globalComponentTheme = theme[componentName] || defaultKey

    if (!cursor.has(componentTheme)) {
      cursor.set(componentTheme, new WeakMap())
    }
    cursor = cursor.get(componentTheme)

    if (!cursor.has(globalComponentTheme)) {
      cursor.set(globalComponentTheme, new WeakMap())
    }
    cursor = cursor.get(globalComponentTheme)

    if (!cursor.has(override)) {
      cursor.set(override, deepmerge.all([componentTheme, globalComponentTheme, override]))
    }

    return cursor.get(override)
  }
