import merge from 'deepmerge'
import { Tokens } from './contract'
import { tokens } from './default'
export * from './contract'

export const createTokens = (override: Partial<Tokens>) => merge(tokens, override)

export { mobile } from './mobile'
export { web } from './web'
export { tokens }
