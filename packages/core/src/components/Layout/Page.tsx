import React from 'react'
import { createClassName } from '../../styled-system/'
import { useTheme } from '../../theme/'
import { PageProps } from './contract'

const pageClassName = createClassName<PageProps>(
  (_, props, { font }) => ({
    display: 'block',
    smoothing: font.smoothing,
    color: font.defaultColor,
    lineHeight: font.defaultLineHeight,
    fontFamily: font.fontFamily,
    fontSize: font.defaultFontSize,
    ...props,
  })
)

export const Page = ({ children, ...props }: PageProps) => {
  const theme = useTheme()
  const pageStyle = pageClassName(props, theme)

  return (
    <div css={pageStyle}>
      { children }
    </div>
  )
}
