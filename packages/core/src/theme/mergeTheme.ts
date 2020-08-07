import deepmerge from 'deepmerge'
import { expandShorthandsDeep } from '../styled-system/expandShorthands'
import { isMergeableObject } from '../utils/'
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
    const layers = [defaultTheme, globalOverride, localOverride].map(theme => expandShorthandsDeep(theme))
    cursor.set(localOverride, mergeThemes(layers))
  }

  return cursor.get(localOverride)
}

function mergeThemes(themes: any[]) {
  const res = deepmerge.all(themes, { isMergeableObject })
  const propMaps = themes.map(theme => theme ? theme.mapProps : null).filter(map => map != null)
  res['mapProps'] = function mapProps(props: any) {
    propMaps.forEach(map => Object.assign(props, map(props)))
    return props
  }
  return res
}
