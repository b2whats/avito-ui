import React from 'react'
import { useTheme } from '../../utils/'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { TextProps } from './contract'
import { TextTheme } from './theme'

const textClassName = createClassName<TextProps, TextTheme>(
  (themeStyle, props) => ({
    display: props.width ? 'inline-block' : 'inline',
    ...themeStyle,
    ...props,
  }),
  (textRules, { strike }, { text, palette }) => (`
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
        left: -${text.strike.offset}px;
        width: calc(100% + ${text.strike.offset}px * 2);
        border-top: 0.075em solid ${typeof strike === 'string' ? palette[strike] : 'currentcolor'};
        height: calc(50% - 1px);
        transform: rotateZ(-2deg);
      }
    ` : ''}
    
    ${textRules}
  `)
)

const Text = ({ children, ...props }: TextProps) => {
  const theme = useTheme()
  const { Text } = foldThemeParams<TextTheme>(theme.text, props)
  const textStyle = textClassName(props, theme, Text.style)
  const Tag = props.as || 'span'

  return (
    <Tag css={textStyle} data-component='text'>
      { children }
    </Tag> 
  )
}

export default Text