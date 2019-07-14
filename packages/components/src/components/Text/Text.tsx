import React from 'react'
import { styled } from '../../utils/'
import { TextProps } from './contract'

const TextBox = styled('span')<TextProps>`
  box-sizing: border-box;
  margin: 0;

  ${({ appearance, bold, light, variance, color, noMargin, size, theme: { text, palette } }) => (`
    font-family: ${text.fontFamily};
    font-size: ${appearance && appearance !== 'p' ? text[`appearance_${appearance}_fontSize`] : text[`size_${size}_fontSize`]};
    line-height: ${appearance ? text[`appearance_${appearance}_lineHeight`] : text.lineHeight};
    font-weight: ${bold ? 700 : light ? 300 : appearance ? text[`appearance_${appearance}_fontWeight`] : text.fontWeight};
    color: ${
      color ? palette[color] : 
      variance ? text[`variance_${variance}_color`] :
      text[`appearance_${appearance}_color`] || text.color
    };
    article > & {
      margin-bottom: ${noMargin || !appearance ? 0 : text[`appearance_${appearance}_marginBottom`]};
    }
  `)}

  &:last-child {
    margin-bottom: 0;
  }

  caption& {
    display: block;
  }

  ${({ underline }) => underline && `
    display: inline-block;
    cursor: pointer;
    border-bottom: 1px ${underline} currentColor;
  `}

  ${({ uppercase, italic, strike, align }) => `
    text-align: ${align};
    text-transform: ${uppercase ? 'uppercase' : 'none'};
    font-style: ${italic ? 'italic' : 'normal'};
    ${strike ? `
      position: relative;
      display: inline-block;
    ` : ''}
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

  ${({ crop, theme: { text } }) => crop && `
    vertical-align: top;

    &::before, &::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    &::before { margin-top: -${text.crop_top} }
    &::after { margin-bottom: -${text.crop_bottom} }
  `}

  & > svg {
    position: absolute;
    height: 8px;
    top: 50%;
    margin-top: -4px;
    stroke-linecap: round;
    ${({ strike, theme: { text, palette } }) => `
      stroke-width: ${text.strike_height};
      left: -${text.strike_offset};
      width: calc(100% + ${text.strike_offset} * 2);
      stroke: ${typeof strike === 'string' ? palette[strike] : 'currentcolor'};
    `}
  }
`

const Line = () => (
  <svg viewBox='0 0 100 5' preserveAspectRatio='none'>
    <line x1='1' x2='99' y1='4' y2='2' />
  </svg>
)

const appearanceMapTag: { [key: string]: TextProps['as'] } = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  caption: 'p',
}

const Text = ({ children, as, ...props }: TextProps) => (
  <TextBox as={as || appearanceMapTag[props.appearance!]} {...props}>
    {props.strike && <Line />}
    { children }
  </TextBox>
)

Text.defaultProps = {
  size: 'm',
  align: 'start',
  bold: false,
  light: false,
  uppercase: false,
  italic: false,
  strike: false,
  truncate: false,
  crop: false,
  noMargin: false,
}

export default Text

var a = <Text /> 