import React from 'react'
import { UserIcon } from '../src/components/Icon/icons'

export const variant = ['primary', 'secondary', 'success', 'error', 'warning'] as ('primary' | 'secondary' | 'success' | 'error' | 'warning')[]
export const bool = [true, false]
export const sml = ['s', 'm', 'l'] as ('s' | 'm' | 'l')[]
export const icon = React.createElement(UserIcon)
export const maybe = <T>(el: T) => ([undefined] as any[]).concat(el)

interface MockOptions<Props> {
  /* These props are used for all screenshots by default */
  browserBase?: Partial<Props>
  browserSets?: PropSets<Props>
}
type PropSets<Props> = { [K in keyof Props]?: Props[K][] }[]
export function mockProps<Props, Options = {}>(
  sets: ((options: Options) => PropSets<Props>) | null = null,
  { browserBase = {}, browserSets = [] }: MockOptions<Props> = {}
) {
  return (options: Options) => ({ sets: sets ? sets(options) : [{}], browserBase, browserSets })
}
