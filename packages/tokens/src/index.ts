import merge from 'deepmerge'
import { Tokens } from './contract'
import defaultTokens from './default'
export * from './contract'

export const createTokens = (override: Partial<Tokens>) => merge(defaultTokens, override)

export { default as Mav } from './mav'
