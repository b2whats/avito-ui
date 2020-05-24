import React from 'react'
import { useTheme, mergeTheme } from '../../theme/'
import { foldThemeParams, createClassName, deriveThemeProps } from '../../styled-system/'
import { TextProps } from './contract'
import { textTheme } from './theme'

const textClassName = createClassName<TextProps, typeof textTheme>(
  (themeStyle, props) => ({
    display: props.width || props.height ? 'inline-block' : 'inline',
    ...themeStyle,
    ...props,
  }),
  (textRules, { strike }, { palette }) => (`
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    li& {
      list-style: none;
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

const Text = ({ children, override, ...props }: TextProps) => {
  const theme = useTheme()
  const componentTheme = mergeTheme(textTheme, theme.Text, override)
  props = { ...props, ...deriveThemeProps(props, componentTheme) }
  const { Text } = foldThemeParams(props, componentTheme)
  const textStyle = textClassName(props, theme, Text.style)
  const Tag = props.as || 'span'

  return (
    <Tag css={textStyle} {...Text.props} >
      { children }
    </Tag>
  )
}

export default Text
