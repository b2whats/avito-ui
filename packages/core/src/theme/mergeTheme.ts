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

function isMergeableObject(value) {
  return isNonNullObject(value)
		&& !isSpecial(value)
}

function isNonNullObject(value) {
  return !!value && typeof value === 'object'
}

function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value)

  return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| stringValue === '[object String]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7

function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE
}

function mergeThemes(themes: any[]) {
  const res = deepmerge.all(themes, {
    isMergeableObject: isMergeableObject,
  })
  res['mapProps'] = themes.map(t => t ? t.mapProps : null).reduce((composed, map) => {
    return map ? (props: any) => ({ ...props, ...map(composed(props)) }) : composed
  }, (props: any) => props)
  return res
}
