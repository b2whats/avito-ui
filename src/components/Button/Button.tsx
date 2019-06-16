import React, { FunctionComponent } from 'react'
import { styled } from '../../utils/'
import { ButtonProps } from './contract'

const ButtonBox = styled('button')<ButtonProps>`
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-weight: 500;
  letter-spacing: 0.15px;
  position: relative;
  text-transform: uppercase;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  padding: 0 10px;
  outline: none;

  ${props => (`
    font-size: ${props.theme.button.fontSize};
  `)}
`

const Button: FunctionComponent<ButtonProps> = ({ children }) => (
  <ButtonBox>
    { children }
  </ButtonBox>
)

export default Button