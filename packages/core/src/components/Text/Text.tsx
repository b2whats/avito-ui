import React from 'react'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { uiComponent } from '../../theme/'
import { filterProps } from '../../utils/'
import { TextProps } from './contract'
import { textTheme } from './theme'

const textClassName = createClassName<TextProps, typeof textTheme>({
  display: props => props.width || props.height ? 'inline-block' : 'inline',
  mapPropsToStyle: true,
  cssRewrite: (textRules, { strike, underline }, { palette, font }) => (`
    margin: 0;
    font-weight: normal;

    li& {
      list-style: none;
    }

    a& {
      text-decoration: none;
    }

    &>span {
      ${strike ? `
        position: relative;
        white-space: nowrap;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          border-top: 0.075em solid ${typeof strike === 'string' ? palette[strike] : 'currentcolor'};
          height: calc(50% - 1px);
          transform: rotateZ(-2deg);
        }
      ` : ''}
      ${underline ? `
        cursor: pointer;

        padding-bottom: ${font.underline.offset}px;
        border-bottom: ${font.underline.height}px ${typeof underline === 'string' ? underline : 'solid'} currentColor;
      ` : ''}
    }

    ${textRules}
  `),
})

export const Text = uiComponent('Text', textTheme)(({ children, ...props }: TextProps, { theme, tokens, testId }) => {
  const { Text } = foldThemeParams(props, theme)
  const textStyle = textClassName(props, tokens, Text)
  const Tag = props.as || 'span'
  const decorated = props.strike || props.underline

  return (
    <Tag css={textStyle} {...filterProps(props)} {...testId()}>
      {/* apply decoration to wrapper so that it does not grow */}
      {decorated ? <span>{ children }</span> : children}
    </Tag>
  )
})
