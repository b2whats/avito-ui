import React from 'react'
import { styled } from '../../utils'
import { space, dimension } from '../../styled-system'
import { StackProps } from './contract'

const Stack = styled('div')<StackProps>`
  box-sizing: border-box;

  ${({ column, align, justify, inline, width, maxWidth, height, maxHeight }) => `
    display: ${inline ? 'inline-flex' : 'flex'};
    flex-direction: ${column ? 'column' : 'row'};
    align-items: ${align};
    ${justify ? `justify-content: ${justify};` : ''}
    overflow: ${width || maxWidth || height || maxHeight ? 'auto' : 'visible' };
  `}

  ${({ space, column, theme: { spaces } }) => `
    & > :not(:last-child) { margin-${column ? 'bottom' : 'right'}: ${spaces[space]}; }
  `}

  ${space}
  ${dimension}

  ${({ debug, theme: { palette } }) => debug && `
    border: 2px solid ${palette.red30};
    & > * {
      background-color: ${palette.blue20};
    }

    & > :nth-child(2n) {
      background-color: ${palette.yellow20};
    }
  `}
`

Stack.defaultProps = {
  space: 'none',
  align: 'baseline',
}

export default Stack