import merge from 'deepmerge'
import { Tokens } from './contract'
import defaultTokens from './default'
export * from './contract'

export const createTokens = (override: Partial<Tokens>) => merge(defaultTokens, override)

export { default as mobile } from './mobile'
export { default as web } from './web'
export default defaultTokens
