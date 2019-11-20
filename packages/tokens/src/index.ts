import merge from 'deepmerge'
import { Tokens } from './contract'
import defaultTokens from './default'

export const createTokens = (override: Partial<Tokens>) => merge(defaultTokens, override)

export type Tokens = Tokens
export { default as Mav } from './mav'
