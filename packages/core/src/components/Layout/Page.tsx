import React from 'react'
import { createClassName } from '../../styled-system/'
import { uiComponent } from '../../theme/'
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

export const Page = uiComponent('Page', {}, { memo: false })(({ children, ...props }: PageProps, { tokens }) => {
  const pageStyle = pageClassName(props, tokens)

  return (
    <div css={pageStyle}>
      { children }
    </div>
  )
})
