import React from 'react'
import { styled, useTheme, isPropValid, foldPreset } from '../../utils/'
import { space } from '../../styled-system/'
import { TextProps } from './contract'

const Text = styled('span', {
  target: 'Text',
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'kind',
})<TextProps>`
  box-sizing: border-box;
  margin: 0;
  -webkit-font-smoothing: antialiased;

  ${({ size, lineHeight, inherit, variant, color, theme: { text, palette, variants } }) => (`
    font-family: ${text.fontFamily};
    font-size: ${inherit ? 'inherit' : text[`size_${size}_fontSize`]};
    line-height: ${inherit ? 'inherit' : text[`lineHeight_${lineHeight}`]};
    color: ${
      color ? palette[color] : 
      variant ? variants[`${variant}_color_normal`] :
      inherit ? 'inherit' :
      text.color
    };
  `)}

  ${({ bold, light, align, valign, uppercase, italic, inline, block, letterSpacing, noWrap, theme: { text } }) => (`
    font-weight: ${bold ? 700 : light ? 300 : text.fontWeight};
    ${uppercase ? 'text-transform: uppercase;' : ''}
    ${letterSpacing ? `letter-spacing: ${letterSpacing};` : ''}
    ${italic ? 'font-style: italic;' : ''}
    ${align ? `text-align: ${align};` : ''}
    ${valign ? `vertical-align: ${valign};` : ''}
    ${inline ? 'display: inline;' : block ? 'display: block;' : ''}
    ${noWrap ? 'white-space: nowrap;' : ''}
  `)}

  ${space}

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

const defaultProps = {
  size: 'm',
  lineHeight: 'm',
}

const TextWrapper = ({ children, ...props }: TextProps) => {
  const theme = useTheme()

  const presetTextProps = foldPreset(theme.text.preset.Text, props)

  return (
    <Text theme={theme} {...defaultProps} {...presetTextProps} {...props}>
      {props.strike && <Line />}
      { children }
    </Text> 
  )
}

export default TextWrapper