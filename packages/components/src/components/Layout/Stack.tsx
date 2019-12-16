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
      & > *:not(:last-child) { margin-${column ? 'bottom' : 'right'}: ${spaceToken[space] || space}px; }
    ` : ''}

    ${debug ? `
      border: 2px solid ${palette.red300};
      & > * {
        background-color: ${palette.blue200};
      }

      & > :nth-child(2n) {
        background-color: ${palette.yellow200};
      }
    ` : ''}

    ${textRules}
  `)
)


export const Stack: React.RefForwardingComponent<
  React.Ref<HTMLButtonElement>,
  StackProps
> = React.forwardRef(({ as, children, ...props }: StackProps, ref) => {
  const theme = useTheme()
  const stackStyle = stackClassName(props, theme)
  const Tag = as || 'div'

  return (
    <Tag ref={ref} css={stackStyle} {...filterProps(props)}>
      { children }
    </Tag>
  )
})

Stack.displayName = 'Stack'

export default Stack