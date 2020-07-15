import React from 'react'
import { createClassName } from '../../styled-system/'
import { uiComponent } from '../../theme/'
import { filterProps } from '../../utils/'
import { BoxProps } from './contract'

const boxClassName = createClassName<BoxProps>(
  (_, props) => ({
    display: 'inline-flex',
    shrink: false,
    ...props,
  })
)

export const Box = uiComponent('Box', {}, { memo: false })(({ children, ...props }: BoxProps, { testId, tokens }) => (
  <div css={boxClassName(props, tokens)} {...filterProps(props)} {...testId()}>
    { children }
  </div>
))
