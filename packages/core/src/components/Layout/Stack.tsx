import React from 'react'
import { filterProps } from '../../utils/'
import { useTheme } from '../../theme/'
import { createClassName } from '../../styled-system/'
import { StackProps } from './contract'

const stackClassName = createClassName<StackProps>(
  (_, props) => ({
    display: 'flex',
    valign: !props.column ? 'top' : undefined,
    ...props,
  }),
  (textRules, { column, scroll, spacing, debug }, { space, palette }) => (`
    -webkit-user-select: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
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