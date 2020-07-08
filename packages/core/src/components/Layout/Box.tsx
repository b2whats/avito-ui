import React from 'react'
import { createClassName } from '../../styled-system/'
import { useTheme } from '../../theme/'
import { filterProps, withMarker } from '../../utils/'
import { BoxProps } from './contract'

const boxClassName = createClassName<BoxProps>(
  (_, props) => ({
    display: 'inline-flex',
    shrink: false,
    ...props,
  })
)

export const Box = ({ children, ...props }: BoxProps) => {
  const theme = useTheme()
  const boxStyle = boxClassName(props, theme)
  const [testId] = withMarker(props.marker)

  return (
    <div css={boxStyle} {...filterProps(props)} {...testId()}>
      { children }
    </div>
  )
}
