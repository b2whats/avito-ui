import anyStyled, { CreateStyled } from '@emotion/styled'
import { Tokens } from '@avito/tokens'
export { CacheProvider } from '@emotion/core'
export { default as createCache } from '@emotion/cache'
export { default as createEmotionServer } from 'create-emotion-server'

export { css, keyframes } from '@emotion/core'
// TODO: посмотреть как в именованых экспортах можно привести тип
export const styled = anyStyled as CreateStyled<Tokens>
export * from './createClassName'
export * from './fold'
export * from './StyleProperties'
export * from './expandShorthands'
export * from './types'
