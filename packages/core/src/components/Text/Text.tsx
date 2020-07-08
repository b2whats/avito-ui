import React from 'react'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { uiComponent } from '../../theme/'
import { filterProps } from '../../utils/'
import { TextProps } from './contract'
import { textTheme } from './theme'

const textClassName = createClassName<TextProps, typeof textTheme>(
  (themeStyle, props) => ({
    display: props.width || props.height ? 'inline-block' : 'inline',
    ...themeStyle,
    ...props,
  }),
  (textRules, { strike }, { palette }) => (`
    li& {
      list-style: none;
    }

    a& {
      text-decoration: none;
    }

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

    ${textRules}
  `)
)

export const Text = uiComponent('Text', textTheme)(({ children, ...props }: TextProps, { theme, tokens, testId }) => {
  const { Text } = foldThemeParams(props, theme)
  const textStyle = textClassName(props, tokens, Text.style)
  const Tag = props.as || 'span'

  return (
    <Tag css={textStyle} {...filterProps(props)} {...testId()}>
      { children }
    </Tag>
  )
})
