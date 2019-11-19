import React from 'react'
import { styled, useTheme, isPropValid, foldPreset } from '../../utils/'
import { getThemeStyle } from '../../styled-system/'
import { TextProps } from './contract'
import { ClassNames,  css, jsx } from '@emotion/core'

const TextBox = styled('span')<TextProps>`
  box-sizing: border-box;
  margin: 0;
  -webkit-font-smoothing: antialiased;

  li& {
    list-style: none;
  }

  caption& {
    display: block;
  }

  ${({ underline, theme: { text }}) => underline && `
    cursor: pointer;
    padding-bottom: ${text.underline_offset};
    border-bottom: ${text.underline_height} ${typeof underline === 'string' ? underline : 'solid'} currentColor;
  `}

  ${({ strike, theme: { text, palette } }) => strike && `
    position: relative;

    & > .strike-line {
      position: absolute;
      height: 5px;
      top: 50%;
      margin-top: -2px;
      stroke-linecap: round;
      stroke-width: ${text.strike_height};
      left: -${text.strike_offset};
      width: calc(100% + ${text.strike_offset} * 2);
      stroke: ${typeof strike === 'string' ? palette[strike] : 'currentcolor'};
    }
  `}

  ${({ truncate, crop }) => truncate && !crop && `
    max-width: ${typeof truncate === 'string' ? truncate : '100%'};
    display: inline-block;
    vertical-align: top;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-wrap: normal;
    overflow: hidden;
  `}

  ${({ crop, lineHeight, theme: { text } }) => crop && `
    && {
      margin-top: 0;
      margin-bottom: 0;
      display: inline-block;
    }
    
    &::before, &::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    &::before { margin-bottom: -${text[`crop_${lineHeight}_top`]}em }
    &::after { margin-top: -${text[`crop_${lineHeight}_bottom`]}em }
  `}
`

const Line = () => (
  <svg className='strike-line' viewBox='0 0 100 5' preserveAspectRatio='none'>
    <line x1='1' x2='99' y1='4' y2='2' />
  </svg>
)


const Text = ({ children, ...props }: TextProps) => {
  const theme = useTheme()

  const presetTextProps = foldPreset(theme.text.preset.Text, props)
  const start = performance.now()
  const style = getThemeStyle('text', props, theme, {
    Text: { ...props, display: 'inline' },
  })
  const end = performance.now()
  console.log('timing', end- start,style)

  return (
    <TextBox {...presetTextProps} {...props}>
      <div css={style.Text}></div>
      {props.strike && <Line />}
      { children }
    </TextBox> 
  )
}

export default Text