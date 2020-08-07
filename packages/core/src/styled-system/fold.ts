import type { ElementType } from 'react'
import { profiler } from '../utils'
import { StyleProperties } from './StyleProperties'
import { SchemeType, ComponentTheme } from './types'

const execComputables = (object: object, arg: any) => {
  for (const key in object) {
    if (typeof object[key] === 'function') {
      object[key] = object[key](arg)
    }
  }
  return object
}

const foldScheme = (scheme: any, props: any) => {
  const result = {
    style: {},
    props: {},
    component: null,
  }

  if (!scheme) return result

  for (const prop in scheme) {
    if (['style', 'props'].includes(prop)) {
      Object.assign(result[prop], scheme[prop])

      continue
    }

    if (prop === 'component') {
      result.component = scheme.component

      continue
    }

    const value = props[prop]
    const nestedConfig = scheme[prop]

    const switchBranch = nestedConfig[value]
    if (switchBranch || value) {
      const data = foldScheme(switchBranch || nestedConfig, props)

      Object.assign(result.style, data.style)
      Object.assign(result.props, data.props)
      data.component && (result.component = data.component)

      continue
    }
  }

  execComputables(result.props, props)
  execComputables(result.style, props)

  return result
}

type FoldedItemTheme<ItemTheme> = ItemTheme extends SchemeType<infer InProps, infer OutProps> ? {
  style: StyleProperties
  props: OutProps
  component: ElementType<OutProps>
} : never

export type FoldThemeParamsReturn<ThemeType> = ThemeType extends ComponentTheme<any, any> ? {
  [K in keyof ThemeType['scheme']]: FoldedItemTheme<ThemeType['scheme'][K]>
} : never

export const foldThemeParams = profiler.withMeasure('fold')(function foldThemeParams<
  T extends ComponentTheme<any, any>
>(props: any, { scheme }: T): FoldThemeParamsReturn<T> {
  const result: any = {}

  let name: keyof typeof scheme
  for (name in scheme) {
    result[name] = foldScheme(scheme[name], props)
  }

  return result
})
