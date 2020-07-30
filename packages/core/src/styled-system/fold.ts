import type { ElementType } from 'react'
import { profiler } from '../utils'
import { Slot, ComponentTheme } from './types'

const execComputables = (object: object, arg: any) => {
  for (const key in object) {
    if (typeof object[key] === 'function') {
      object[key] = object[key](arg)
    }
  }
  return object
}

const foldScheme = (schemes: any, props: any, result = {}) => {
  if (!schemes) return result
  schemes = Array.isArray(schemes) ? schemes : [schemes]

  for (let index = 0; index < schemes.length; index++) {
    const scheme = schemes[index]
    const { $if, $switch } = scheme
    if ($if) {
      // FIXME move into explicit branching commit
      if (!$if(props)) continue
      foldScheme(scheme.$then, props, result)
    } else if ($switch) {
      const branch = scheme[props[$switch]]
      foldScheme(branch, props, result)
    } else {
      Object.assign(result, scheme)
    }
  }

  return result
}

type FoldedItemTheme<ItemTheme> = ItemTheme extends Slot<infer OutProps>
  ? Partial<OutProps> & { component: ElementType<OutProps>}
  : never

export type FoldThemeParamsReturn<ThemeType> = ThemeType extends ComponentTheme<any, infer Scheme>
  ? { [K in keyof Scheme]: FoldedItemTheme<Scheme[K]> }
  : never

export const foldThemeParams = profiler.withMeasure('fold')(function foldThemeParams<
  T extends ComponentTheme<any, any>
>(props: any, { scheme }: T): FoldThemeParamsReturn<T> {
  const result: any = {}

  let name: keyof typeof scheme
  for (name in scheme) {
    result[name] = execComputables(foldScheme(scheme[name], props), props)
  }

  return result
})
