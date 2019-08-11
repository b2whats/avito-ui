import React from 'react'
import { styled } from '../../utils'
import { space, dimension } from '../../styled-system'
import { StackProps } from './contract'

const Stack = styled('div')<StackProps>`
  box-sizing: border-box;

  ${({ column, align, justify, inline, scroll }) => `
    display: ${inline ? 'inline-flex' : 'flex'};
    width: ${inline ? 'auto' : '100%'};
    flex-direction: ${column ? 'column' : 'row'};
    align-items: ${align ? align : !column ? 'baseline' : 'normal'};
    ${justify ? `justify-content: ${justify};` : ''}
    overflow-y: ${scroll && column ? 'scroll' : 'visible'};
    overflow-x: ${scroll && !column ? 'scroll' : 'visible'};
  `}

  ${({ space, column, theme: { spaces } }) => space && `
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

export default Stack


var a = <Stack>fff</Stack>