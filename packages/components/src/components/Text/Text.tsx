import React from 'react'
import { useTheme } from '../../utils/'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { TextProps } from './contract'
import { TextTheme } from './theme'

const textClassName = createClassName<TextProps, TextTheme>(
  (style, props) => ({
    display: props.width ? 'inline-block' : 'inline',
    ...style,
    ...props,
  }),
  (textRules, { strike }, { text, palette }) => (`
    box-sizing: border-box;
    margin: 0;

    li& {
      list-style: none;
    }

    ${strike ? `
      position: relative;
      white-space: nowrap;
      
      & > .strike-line {
        position: absolute;
        height: 5px;
        top: 50%;
        margin-top: -2px;
        stroke-linecap: round;
        stroke-width: ${text.strike.height};
        left: -${text.strike.offset}px;
        width: calc(100% + ${text.strike.offset}px * 2);
        stroke: ${typeof strike === 'string' ? palette[strike] : 'currentcolor'};
      }
    ` : ''}
    
    ${textRules}
  `)
)

const Line = () => (
  <svg className='strike-line' viewBox='0 0 100 5' preserveAspectRatio='none'>
    <line x1='1' x2='99' y1='4' y2='2' />
  </svg>
)

const Text = ({ children, ...props }: TextProps) => {
  const theme = useTheme()
  const { Text } = foldThemeParams<TextTheme>(theme.text, props)
  const textStyle = textClassName(props, theme, Text.style)
  const Tag = props.as || 'span'

  return (
    <Tag css={textStyle} data-component='text'>
      {props.strike && <Line />}
      { children }
    </Tag> 
  )
}

export default Text