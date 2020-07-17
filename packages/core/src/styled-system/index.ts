import anyStyled, { CreateStyled } from '@emotion/styled'
import { Tokens } from '@avito/tokens'

export { css, keyframes } from '@emotion/core'
// TODO: посмотреть как в именованых экспортах можно привести тип
export const styled = anyStyled as CreateStyled<Tokens>
export * from './createClassName'
export * from './fold'
export * from './StyleProperties'
export * from './types'
