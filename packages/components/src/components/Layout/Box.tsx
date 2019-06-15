import { styled } from '../../utils'
import { space, dimension, shadows, colors } from '../../styled-system'
import { BoxProps } from './contract'

const Box = styled('div', { shouldForwardProp: prop => prop === 'children' })<BoxProps>`
  box-sizing: border-box;

  ${({ grow, shrink, alignSelf, display, radius }) => `
    display: ${display};
    flex-shrink: ${shrink ? '1' : '0'};
    ${grow ? 'flex-grow: 1;': ''}
    ${radius ? `border-radius: ${radius};` : ''}
    ${alignSelf ? `align-self: ${alignSelf};` : ''};
  `}

  ${space}
  ${dimension}
  ${shadows}
  ${colors}
`

Box.defaultProps = {
  display: 'block',
}

export default Box