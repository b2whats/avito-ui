export { css, keyframes } from '@emotion/core'
import styled, { CreateStyled } from '@emotion/styled'
import { Tokens } from '@avito/tokens'

// TODO: посмотреть как в именованых экспортах можно привести тип
export default styled as CreateStyled<Tokens>
export * from './getThemeStyle'