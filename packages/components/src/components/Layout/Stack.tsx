import React from 'react'
import { useTheme, omit, filterProps } from '../../utils'
import { createClassName } from '../../styled-system/'
import { StackProps } from './contract'

const stackClassName = createClassName<StackProps>(
  (_, props) => ({ display: 'flex', ...omit(props, 'align')}),
  (textRules, { column, align, scroll, space, debug }, { palette, space: spaceToken }) => (`
    box-sizing: border-box;
    flex-shrink: 0;
    align-items: ${align ? align : !column ? 'baseline' : 'normal'};
    ${scroll ? `overflow-${column ? 'y' : 'x'}: scroll;` : ''};

    ${space ? `
      & > :not(:last-child) { margin-${column ? 'bottom' : 'right'}: ${spaceToken[space] || space}px; }
    ` : ''}

    ${debug ? `
      border: 2px solid ${palette.red30};
      & > * {
        background-color: ${palette.blue20};
      }

      & > :nth-child(2n) {
        background-color: ${palette.yellow20};
      }
    ` : ''}

    ${textRules}
  `),
)

const Stack = ({ children, ...props }: StackProps) => {
  const theme = useTheme()
  const stackStyle = stackClassName(props, theme)

  return (
    <div css={stackStyle} {...filterProps(props)}>
      { children }
    </div>
  )
}

export default Stack