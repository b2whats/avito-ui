import React from 'react'
import { styled, useTheme } from '../../../packages/components/src/utils'
import { getThemeStyle } from '../../../packages/components/src/styled-system'
import { TextProps } from './contract'

const TextBox = styled('span')<TextProps>`
  box-sizing: border-box;
  margin: 0;

  li& {
    list-style: none;
  }

  ${({ strike, theme: { text, palette } }) => strike && `
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
  `}
`

const Line = () => (
  <svg className='strike-line' viewBox='0 0 100 5' preserveAspectRatio='none'>
    <line x1='1' x2='99' y1='4' y2='2' />
  </svg>
)


const Text = ({ children, ...props }: TextProps) => {
  const theme = useTheme()

  const style = getThemeStyle(theme, 'text', props, {
    Text: { display: 'inline' },
  })

  return (
    <TextBox css={style.Text}>
      {props.strike && <Line />}
      { children }
    </TextBox> 
  )
}

export default Text