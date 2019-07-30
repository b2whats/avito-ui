import { styled } from '../../utils'
import { space, dimension } from '../../styled-system'
import { BoxProps } from './contract'

const Box = styled('div', { shouldForwardProp: prop => prop === 'children' })<BoxProps>`
  box-sizing: border-box;

  ${({ grow, shrink, alignSelf, display }) => `
    display: ${display};
    flex-shrink: ${shrink ? '1' : '0'};
    ${grow ? 'flex-grow: 1;': ''}
    ${alignSelf ? `align-self: ${alignSelf};` : ''};
  `}

  ${space}
  ${dimension}
`

Box.defaultProps = {
  display: 'block',
}

export default Box