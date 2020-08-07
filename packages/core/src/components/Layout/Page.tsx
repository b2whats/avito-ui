import React from 'react'
import { createClassName } from '../../styled-system/'
import { uiComponent } from '../../theme/'
import { PageProps } from './contract'

const pageClassName = createClassName<PageProps>({
  display: 'block',
  mapPropsToStyle: true,
})

export const Page = uiComponent('Page', {}, { memo: false })(({ children, ...props }: PageProps, { tokens }) => {
  const { font } = tokens
  const pageStyle = pageClassName({
    smoothing: font.smoothing,
    color: font.defaultColor,
    lineHeight: font.defaultLineHeight,
    fontFamily: font.fontFamily,
    fontSize: font.defaultFontSize,
    ...props,
  }, tokens)

  return (
    <div css={pageStyle}>
      { children }
    </div>
  )
})
