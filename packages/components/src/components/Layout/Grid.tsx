import React from 'react'
import { styled } from '../../utils'
import { space, dimension } from '../../styled-system'
import { GridProps } from './contract'

// &::before хак против выпадания отрицательных margins из родителя для правильного задания высоты
const Wrapper = styled('div')<GridProps>`
  box-sizing: border-box;

  &::before {
    content: '';
    display: table;
  }

  ${space}
  ${dimension}
`

const Inner = styled('div')<GridProps>`
  box-sizing: border-box;
  display: flex;

  ${({ align, justify }) => `
    flex-wrap: wrap;
    align-items: ${align};
    ${justify ? `justify-content: ${justify};` : ''}
  `}

  ${({ space, spaceY, theme: { spaces } }) => `
      margin-left: -${spaces[space]};
      margin-top: -${spaces[spaceY]};
    & > * {
      border-left: ${spaces[space]} solid transparent;
      margin-top: ${spaces[spaceY]};
    }
  `}

  ${({ debug, theme: { palette } }) => debug && `
    & > * {
      background-color: ${palette.blue20};
      background-clip: padding-box;
    }

    & > :nth-child(2n) {
      background-color: ${palette.yellow20};
    }
  `}
`

const Grid = ({ children, ...props }: GridProps) => (
  <Wrapper {...props}>
    <Inner {...props}>
      { children }
    </Inner>
  </Wrapper>
)

Grid.defaultProps = {
  space: 'none',
  spaceY: 'none',
  align: 'stretch',
}

export default Grid