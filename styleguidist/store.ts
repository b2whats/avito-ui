import { createDomain } from 'effector'
import { profiler } from '@avito/core'
import { themes } from './themes'

export type Platform = 'web' | 'mobile'

const StyleguideDomain = createDomain()

type Store = typeof themes[number] & {
  detailedProfiling: boolean
}

export const setTheme = StyleguideDomain.event<typeof themes[number]>()
export const setProfiling = StyleguideDomain.event<boolean>()

export const StyleguideStore = StyleguideDomain.store<Store>({
  ...themes[0],
  detailedProfiling: profiler.isActive,
})
  .on(setTheme, (state, theme) => ({ ...state, ...theme }))
  .on(setProfiling, (state, detailedProfiling) => ({ ...state, detailedProfiling }))

StyleguideStore.watch(state => {
  profiler.isActive = state.detailedProfiling
})
