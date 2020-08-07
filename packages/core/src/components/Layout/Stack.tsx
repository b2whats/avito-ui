import React from 'react'
import { createClassName } from '../../styled-system/'
import { uiComponent } from '../../theme/'
import { filterProps } from '../../utils/'
import { StackProps } from './contract'

const stackClassName = createClassName<StackProps>({
  display: 'flex',
  mapPropsToStyle: props => ({
    valign: !props.column ? 'top' : undefined,
    ...props,
  }),
  cssRewrite: (textRules, { column, scroll, spacing, spacingCross, debug }, { space }) => (`
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
  `),
})

export const Stack = uiComponent('Stack', {}, { memo: false })((
  { as, children, ...props }: StackProps,
  { testId, tokens }
) => {
  const stackStyle = stackClassName(props, tokens)
  const Tag = as || 'div'

  return (
    <Tag css={stackStyle} {...filterProps(props)} {...testId()}>
      { children }
    </Tag>
  )
})
