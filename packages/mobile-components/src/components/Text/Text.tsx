import React from 'react'
import { useThemeMemo } from '../../theme/'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { TextProps } from './contract'
import { createTextTheme, TextTheme } from './theme'

const textClassName = createClassName<TextProps, TextTheme>(
  (themeStyle, props) => ({
    display: props.width || props.height ? 'inline-block' : 'inline',
    ...themeStyle,
    ...props,
  }),
  (textRules, { strike }, { palette }) => (`
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    --size: 2048;
    --ascent: 1854;
    --descent: 434;
    --capitalHeight: 1467;

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
  const [theme, textTheme] = useThemeMemo(createTextTheme, override)
  const { Text } = foldThemeParams(props, textTheme)
  const textStyle = textClassName(props, theme, Text.style)
  const Tag = props.as || 'span'

  return (
    <Tag css={textStyle} {...Text.props} data-component='text'>
      { children }
    </Tag> 
  )
}

export default Text