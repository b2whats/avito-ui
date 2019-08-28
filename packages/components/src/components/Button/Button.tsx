import React, { useContext, useRef, useEffect, useState, useCallback } from 'react'
import { styled, useTheme, isPropValid, functionRef } from '../../utils/'
import { focus, space } from '../../styled-system/'
import { ButtonProps } from './contract'
import { Text } from '../Text/'
import { Variants } from '../Variants/'
import { groupTargetHook } from '../Layout/Group'

const ButtonBox = styled(Variants, {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'loading' && prop !== 'kind',
})<ButtonProps>`
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  margin: 0;
  line-height: 1;
  position: relative;

  &::-moz-focus-inner {
    border: 0;
  }

  ${({ block, size, rounded, theme: { button } }) => (`
    border-radius: ${rounded ? '100px' : button.borderRadius};
    display: ${block ? 'block' : 'inline-block'};
    width: ${block ? '100%' : 'auto'};
    min-height: ${button[`size_${size}_height`]};
    border: ${button.borderWidth} solid transparent;
  `)}

  ${({ kind, theme: { button, shadows } }) => (`
    ${button[`${kind}_shadow`] ? `box-shadow: ${shadows['1']};` : ''}

    &:active > span:first-child {
      transform: translateY(${button[`${kind}_press_offset`]});
    }

    &[data-group] {
      box-shadow: none;
    }

    &[data-group~='horizontal']:not([data-group~='last']) {
      margin-right: ${kind === 'outline' ? '-' : ''}${button.borderWidth};
      border-bottom-right-radius: 0px;
      border-top-right-radius: 0px;
    }

    &[data-group~='horizontal']:not([data-group~='first']) {
      border-bottom-left-radius: 0px;
      border-top-left-radius: 0px;
    }

    &[data-group~='vertical']:not([data-group~='last']) {
      margin-bottom: ${kind === 'outline' ? '-' : ''}${button.borderWidth};
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    &[data-group~='vertical']:not([data-group~='first']) {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
  `)}

  &[disabled] {
    pointer-events: none;
  }

  a& {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
`

const Button = ({ children, ...props }: ButtonProps) => {
  const theme = useTheme()

  props = {
    as: 'button',
    size: 'm',
    kind: 'default',
    variant: 'primary',
    type: 'button',
    loading: false,
    ...props,
  }

  const { preset: {
    size : { [props.size]: presetSize },
    kind: { [props.kind]: presetKind },
  } } = theme.button

  const buttonRef = useRef(null)
  const setRef = useCallback(node => {
    buttonRef.current = node

    if (props.innerRef) {
      props.innerRef(node)
    }
  }, [])

  const groupProps = groupTargetHook(buttonRef, props)

  // Necessary when rendering an `a` element, which doesn't use `disabled`
  const aria = {
    'aria-disabled': props.disabled,
    'aria-busy': props.loading,
    tabIndex: props.disabled ? -1 : undefined,
  }

  if (props.as === 'a') {
    props.type = undefined
  }

  return (
    <ButtonBox ref={setRef} {...presetKind.Button} {...presetSize.Button} {...props} {...aria} {...groupProps}>
      <Text {...presetKind.Text} {...presetSize.Text} crop color='inherit'>{ children }</Text>
    </ButtonBox>
  )
}

export default Button