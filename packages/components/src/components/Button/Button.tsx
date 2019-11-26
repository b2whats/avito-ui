import React, { useContext, useRef, useEffect, useState, useCallback } from 'react'
import { styled, useTheme, isPropValid, useRefHook, foldPreset } from '../../utils'
import { ButtonProps } from './contract'
import { Text } from '../../components copy/Text'
import { Variants } from '../../components copy/Variants'
import { VariantsProps } from '../../components copy/Variants/contract'
import { useGroupHook } from '../Layout/Group'

const ButtonBox = styled(Variants, {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'loading' && prop !== 'kind',
})<ButtonProps & VariantsProps>`
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  margin: 0;
  line-height: 1;
  position: relative;

  &::-moz-focus-inner {
    border: 0;
  }

  ${({ kind, borderWidth, rounded, theme: { button } }) => (`
    ${rounded ? 'border-radius: 100px;' : ''};

    &:active > span:first-child {
      transform: translateY(${button[`${kind}_press_offset`]});
    }

    &[data-group] {
      box-shadow: none;
    }

    &[data-group~='horizontal']:not([data-group~='last']) {
      margin-right: ${kind === 'outline' ? '-' : ''}${borderWidth};
      border-bottom-right-radius: 0px;
      border-top-right-radius: 0px;
    }

    &[data-group~='horizontal']:not([data-group~='first']) {
      border-bottom-left-radius: 0px;
      border-top-left-radius: 0px;
    }

    &[data-group~='vertical']:not([data-group~='last']) {
      margin-bottom: ${kind === 'outline' ? '-' : ''}${borderWidth};
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    &[data-group~='vertical']:not([data-group~='first']) {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
  `)}

  a& {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
`

const Button = ({ children, innerRef, ...props }: ButtonProps) => {
  const theme = useTheme()

  props = {
    as: 'button',
    size: 'm',
    kind: 'default',
    variant: 'primary',
    type: 'button',
    ...props,
  }

  const [ref, setRef] = useRefHook<HTMLButtonElement | HTMLLinkElement>(innerRef)
  const groupProps = useGroupHook(ref, props)

  // Necessary when rendering an `a` element, which doesn't use `disabled`
  const aria = {
    'aria-disabled': props.disabled,
    'aria-busy': props.loading,
    tabIndex: props.disabled ? -1 : undefined,
  }

  if (props.as === 'a') {
    props.type = undefined
  }

  const presetButtonProps = foldPreset(theme.button.preset.Button, {...props, ...groupProps})
  const presetTextProps = foldPreset(theme.button.preset.Text, props)

  return (
    <ButtonBox ref={setRef} {...presetButtonProps} {...props} {...aria} {...groupProps}>

      <Text {...presetTextProps} crop color='inherit'>{ children }</Text>
    </ButtonBox>
  )
}

export default Button