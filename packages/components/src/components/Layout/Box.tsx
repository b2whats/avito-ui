import React from 'react'
import { useTheme } from '../../utils'
import { createClassName } from '../../styled-system/'
import { BoxProps } from './contract'

const boxClassName = createClassName<BoxProps>(
  (_, props) => ({
    display: 'inline-flex',
    shrink: false,
    ...props,
  }),
  (textRules) => textRules
)

const Box = ({ children, ...props }: BoxProps) => {
  const theme = useTheme()
  const boxStyle = boxClassName(props, theme)

  return (
    <div css={boxStyle}>
      { children }
    </div>
  )
}

export default Box