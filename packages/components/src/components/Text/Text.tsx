import React, { FunctionComponent } from 'react'
import { css } from '@emotion/core'
import { styled, path } from '../../utils/'
import { TextProps } from './contract'

const truncateStyle = ({ truncate }: TextProps) => truncate && css`
  width: ${typeof truncate === 'string' ? truncate : typeof truncate === 'number' ? `${truncate}px` : '100%'};
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  outline: 0;
  overflow: hidden;
`

const TextBox = styled('p')<TextProps>`
  box-sizing: border-box;

  ${({ theme: { text } }) => (`
    font-size: ${text.fontSize};
    font-family: ${text.fontFamily};
    line-height: ${text.lineHeight};
  `)}

  ${({ bold, light, uppercase, italic }) => (`
    text-transform: ${uppercase ? 'uppercase' : 'none'};
    font-style: ${italic ? 'italic' : 'normal'};
    font-weight: ${bold ? 700 : light ? 300 : 400};
  `)}

  ${({ strike, theme }) => strike && `
    display: inline-block;
    position: relative;

    &::after {
      content: '';
      border-bottom: .15em solid;
      display: block;
      position: absolute;
      top: 50%;
      left: -4px;
      width: calc(100% + 8px);
      transform: rotate(-3deg);
      border-color: ${typeof strike === 'string' ? path(theme.palette as any, strike) : 'inherit'};
    }
  `}
  ${truncateStyle}
`

const Text: FunctionComponent<TextProps> = ({ children, ...props }) => (
  <TextBox {...props}>
    { children }
  </TextBox>
)

Text.defaultProps = {
  align: 'start',
  bold: false,
  light: false,
  uppercase: false,
  italic: false,
  strike: false,
  truncate: false,
}

export default Text