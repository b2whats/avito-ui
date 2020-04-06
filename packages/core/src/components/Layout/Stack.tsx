import React from 'react'
import { omit, filterProps } from '../../utils/'
import { useTheme } from '../../theme/'
import { createClassName } from '../../styled-system/'
import { StackProps } from './contract'

const stackClassName = createClassName<StackProps>(
  (_, props) => ({
    display: 'flex',
    block: true,
    ...omit(props, 'align'),
  }),
  (textRules, { column, align, scroll, spacing, debug }, { space, palette }) => (`
    align-items: ${align ? align : column ? 'normal' : 'baseline'};
    -webkit-user-select: none;
    ${scroll ? `overflow-${column ? 'y' : 'x'}: auto;` : ''};

    ${spacing ? `
      & > *:not(:last-child) { margin-${column ? 'bottom' : 'right'}: ${space[spacing] || spacing}px; }
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

export const Stack = React.forwardRef(({ as, children, ...props }: StackProps, ref: React.Ref<HTMLElement>) => {
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