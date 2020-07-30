import type { ElementType } from 'react'
import { profiler } from '../utils'
import { StyleProperties } from './StyleProperties'
import { Slot, ComponentTheme } from './types'

const execComputables = (object: object, arg: any) => {
  for (const key in object) {
    if (typeof object[key] === 'function') {
      object[key] = object[key](arg)
    }
  }
  return object
}

const foldScheme = (schemes: any, props: any) => {
  const result = {
    style: {},
    props: {},
    component: null,
  }

  if (!schemes) return result
  schemes = Array.isArray(schemes) ? schemes : [schemes]

  for (let index = 0; index < schemes.length; index++) {
    const scheme = schemes[index]
    const { $if, $switch } = scheme
    if ($if && $if(props)) {
      const data = foldScheme(scheme.$then, props)

      Object.assign(result.style, data.style)
      Object.assign(result.props, data.props)
      data.component && (result.component = data.component)
    } else if ($switch) {
      const branch = scheme[props[$switch]]
      const data = foldScheme(branch, props)

      Object.assign(result.style, data.style)
      Object.assign(result.props, data.props)
      data.component && (result.component = data.component)
    } else {
      Object.assign(result.style, scheme.style)
      Object.assign(result.props, scheme.props)
      scheme.component && (result.component = scheme.component)
    }
  }

  return result
}


type FoldedItemTheme<ItemTheme> = ItemTheme extends Slot<infer OutProps> ? {
  style: StyleProperties
  props: OutProps
  component: ElementType<OutProps>
} : never

export type FoldThemeParamsReturn<ThemeType> = ThemeType extends ComponentTheme<any, infer Scheme>
  ? { [K in keyof Scheme]: FoldedItemTheme<Scheme[K]> }
  : never

export const foldThemeParams = profiler.withMeasure('fold')(function foldThemeParams<
  T extends ComponentTheme<any, any>
>(props: any, { scheme }: T): FoldThemeParamsReturn<T> {
  const result: any = {}

  let name: keyof typeof scheme
  for (name in scheme) {
    result[name] = foldScheme(scheme[name], props)
    execComputables(result[name].props, props)
    execComputables(result[name].style, props)
  }

  return result
})
