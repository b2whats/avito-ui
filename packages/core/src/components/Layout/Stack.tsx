import React from 'react'
import { createClassName } from '../../styled-system/'
import { useTheme } from '../../theme/'
import { filterProps, withMarker } from '../../utils/'
import { StackProps } from './contract'

const stackClassName = createClassName<StackProps>(
  (_, props) => ({
    display: 'flex',
    valign: !props.column ? 'top' : undefined,
    ...props,
  }),
  (textRules, { column, scroll, spacing, spacingCross, debug }, { space }) => (`
    ${scroll ? `overflow-${column ? 'y' : 'x'}: auto;` : ''};

    ${spacing ? `
      & > *:not(:last-child) { margin-${column ? 'bottom' : 'right'}: ${space[spacing] || spacing}px; }
    ` : ''}

    ${spacingCross ? `
      && > * { margin-${column ? 'right' : 'bottom'}: ${space[spacingCross] || spacingCross}px; }
    ` : ''}

    ${debug ? `
      outline: 1px solid red;
      & > * {
        background-color: #A1DFFF;
      }

      & > :nth-child(2n) {
        background-color: #ffd173;
      }
    ` : ''}

    ${textRules}
  `)
)

export const Stack = React.forwardRef(({ as, children, ...props }: StackProps, ref: React.Ref<HTMLElement>) => {
  const theme = useTheme()
  const stackStyle = stackClassName(props, theme)
  const testId = withMarker(props.marker)
  const Tag = as || 'div'

  return (
    <Tag ref={ref} css={stackStyle} {...filterProps(props)} {...testId()}>
      { children }
    </Tag>
  )
})

Stack.displayName = 'Stack'
