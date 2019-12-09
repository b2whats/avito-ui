import React from 'react'
import { useTheme } from '../../utils'
import { createClassName } from '../../styled-system'
import { PageProps } from './contract'

const pageClassName = createClassName<PageProps>(
  (_, props, { font }) => ({
    display: 'block',
    ...props,
    color: font.defaultColor,
    lineHeight: font.defaultLineHeight,
    fontFamily: font.fontFamily,
    fontSize: font.defaultFontSize,
  }),
  (textRules) => (`
    box-sizing: border-box;

    ${textRules}
  `),
)

const Page = ({ children, ...props }: PageProps) => {
  const theme = useTheme()
  const pageStyle = pageClassName(props, theme)

  return (
    <div css={pageStyle}>
      { children }
    </div>
  )
}

export default Page