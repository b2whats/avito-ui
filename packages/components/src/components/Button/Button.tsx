import React from 'react'
import { styled, withTheme } from '../../utils/'
import { focus, space } from '../../styled-system/'
import { ButtonProps } from './contract'
import { Text } from '../../'

const ButtonBox = styled('button')<ButtonProps>`
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  margin: 0;

  ${({ block, size, rounded, theme: { button } }) => (`
    border-radius: ${rounded ? '100px' : button.borderRadius};
    display: ${block ? 'block' : 'inline-block'};
    min-height: ${button[`size_${size}_height`]};
  `)}

  ${({ kind, variant, theme: { button, variants } }) => {

    return kind === 'outline' ? `
      color: ${variants[`${variant}_color_normal`]};
      background-color: ${button[`flat_${variant}_backgroundColor_normal`]};
      border-width: 1px;
      border-style: solid;
      border-color: ${variants[`${variant}_borderColor_normal`]};

      &:hover {
        color: ${variants[`${variant}_color_hover`]};
        background-color: ${button[`flat_${variant}_backgroundColor_hover`]};
        border-color: ${variants[`${variant}_borderColor_hover`]};
      }

      &:active {
        color: ${variants[`${variant}_color_active`]};
        background-color: ${button[`flat_${variant}_backgroundColor_active`]};
        border-color: ${variants[`${variant}_borderColor_active`]};
      }

      &:disabled {
        color: ${variants[`${variant}_color_disabled`]};
        border-color: ${variants[`${variant}_borderColor_disabled`]};
      }
    ` : kind === 'flat' ? `
      color: ${variants[`${variant}_color_normal`]};
      background-color: ${button[`flat_${variant}_backgroundColor_normal`]};

      &:hover {
        color: ${variants[`${variant}_color_hover`]};
        background-color: ${button[`flat_${variant}_backgroundColor_hover`]};
      }

      &:active {
        color: ${variants[`${variant}_color_active`]};
        background-color: ${button[`flat_${variant}_backgroundColor_active`]};
      }

      &:disabled {
        color: ${variants[`${variant}_color_disabled`]};
      }
    ` : `
      color: ${button[`default_${variant}_color_normal`]};
      background-color: ${variants[`${variant}_backgroundColor_normal`]};

      &:hover {
        background-color: ${variants[`${variant}_backgroundColor_hover`]};
      }

      &:active {
        background-color: ${variants[`${variant}_backgroundColor_active`]};
      }

      &:disabled {
        color: ${button[`default_${variant}_color_disabled`]};
        background-color: ${variants[`${variant}_backgroundColor_disabled`]};
      }
    `
  }}

  &:disabled {
    cursor: not-allowed;
  }

  ${space}
  ${focus}
`

const Button = ({ children, ...props }: ButtonProps) => {
  const { preset: {
    size : { [props.size]: presetSize },
    kind: { [props.kind]: presetKind }
  } } = props.theme.button

  return (
    <ButtonBox {...presetKind.Button} {...presetSize.Button} {...props}>
      <Text {...presetKind.Text} {...presetSize.Text} crop color='inherit'>{ children }</Text>
    </ButtonBox>
  )
}

Button.defaultProps = {
  size: 'm',
  kind: 'default',
  variant: 'primary',
  type: 'button',
}

export default withTheme(Button)