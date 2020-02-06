import React from 'react'
import { useTheme, filterProps } from '../../utils'
import { createClassName } from '../../styled-system/'
import { BoxProps } from './contract'

const boxClassName = createClassName<BoxProps>(
  (_, props) => ({
    display: 'inline-flex',
    shrink: false,
    ...props,
  })
)

const Box = ({ children, ...props }: BoxProps) => {
  const theme = useTheme()
  const boxStyle = boxClassName(props, theme)

  return (
    <div css={boxStyle} {...filterProps(props)}>
      { children }
    </div>
  )
}

export default Box