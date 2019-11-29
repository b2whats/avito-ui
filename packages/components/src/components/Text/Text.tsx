import React from 'react'
import { useTheme } from '../../utils/'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { TextProps } from './contract'
import { TextTheme } from './theme'

const textClassName = createClassName<TextProps, TextTheme>(
  (themeParams, props) => ({
    display: 'inline',
    ...themeParams && themeParams.Text.style,
    ...props,
  }),
  (textRules, { strike, size, color, variant }, { text, palette }) => (`
    box-sizing: border-box;
    margin: 0;

    li& {
      list-style: none;
    }

    ${strike ? `
      position: relative;

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

    [data-block='text'] > & {
      ${!size ? 'font-size: inherit;' : '' }
      ${!(color || variant) ? 'color: inherit;' : '' }
    }
    
    ${textRules}
  `),
)

const Line = () => (
  <svg className='strike-line' viewBox='0 0 100 5' preserveAspectRatio='none'>
    <line x1='1' x2='99' y1='4' y2='2' />
  </svg>
)

const Text = ({ children, ...props }: TextProps) => {
  const theme = useTheme()
  const themeParams = foldThemeParams<TextTheme>(theme.text, props)
  const textStyle = textClassName(props, theme, themeParams)

  return (
    <div css={textStyle} data-block='text'>
      {props.strike && <Line />}
      { children }
    </div> 
  )
}

export default Text