import React, { useContext, useRef, useEffect, useState } from 'react'
import { styled, ThemeContext, isPropValid, functionRef } from '../../utils/'
import { focus, space } from '../../styled-system/'
import { ButtonProps } from './contract'
import { Text } from '../../'
import { GroupContext } from '../Layout/Group'

const ButtonBox = styled('button', {
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

  ${({ kind, variant, theme: { button, variants, shadows } }) => kind === 'default' ? `
    color: ${button[`default_${variant}_color_normal`]};
    background-color: ${variants[`${variant}_backgroundColor_normal`]};
    ${button.default_shadow ? `box-shadow:  ${shadows['1']};` : ''}

    &[aria-checked=true], &&:active {
      background-color: ${variants[`${variant}_backgroundColor_active`]};
    }

    &:hover {
      background-color: ${variants[`${variant}_backgroundColor_hover`]};
    }

    &:active > span:first-child {
      transform: translateY(${button[`${kind}_press_offset`]});
    }

    &[disabled] {
      color: ${button[`default_${variant}_color_disabled`]};
      background-color: ${variants[`${variant}_backgroundColor_disabled`]};
    }
  ` : `
    color: ${variants[`${variant}_color_normal`]};
    background-color: ${button[`${kind}_${variant}_backgroundColor_normal`]};
    border-color: ${kind === 'outline' ? button[`outline_${variant}_borderColor_normal`] : 'transparent'};
    ${button.outline_shadow && kind === 'outline' ? `box-shadow:  ${shadows['1']};` : ''}
    ${button.flat_shadow && kind === 'flat' ? `box-shadow:  ${shadows['1']};` : ''}

    &[aria-checked=true], &&:active {
      color: ${variants[`${variant}_color_active`]};
      background-color: ${button[`${kind}_${variant}_backgroundColor_active`]};
      border-color: ${kind === 'outline' ? button[`outline_${variant}_borderColor_active`] : 'transparent'};
    }

    &:hover {
      color: ${variants[`${variant}_color_hover`]};
      background-color: ${button[`${kind}_${variant}_backgroundColor_hover`]};
      border-color: ${kind === 'outline' ? button[`outline_${variant}_borderColor_hover`] : 'transparent'};
    }

    &:active > span:first-child {
      transform: translateY(${button[`${kind}_press_offset`]});
    }

    &[disabled] {
      color: ${variants[`${variant}_color_disabled`]};
      border-color: ${kind === 'outline' ? button[`outline_${variant}_borderColor_disabled`] : 'transparent'};
    }
  `}

  ${({ theme: { button } }) => (`
    &[data-group] {
      box-shadow: none;
    }

    &[data-group~='horizontal']:not([data-group~='last']) {
      margin-right: -${button.borderWidth};
      border-bottom-right-radius: 0px;
      border-top-right-radius: 0px;
    }

    &[data-group~='horizontal']:not([data-group~='first']) {
      border-bottom-left-radius: 0px;
      border-top-left-radius: 0px;
    }

    &[data-group~='vertical']:not([data-group~='last']) {
      margin-bottom: -${button.borderWidth};
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    &[data-group~='vertical']:not([data-group~='first']) {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
  `)}

  &:hover {
    z-index: 1;
  }

  &[disabled] {
    pointer-events: none;
  }

  a& {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  ${space}
  ${focus}
`

type buttonNode = HTMLButtonElement | HTMLLinkElement

const Button = ({ children, ...props }: ButtonProps & { ref: ButtonProps['innerRef'] }) => {
  const theme = props.theme || useContext(ThemeContext)

  const { preset: {
    size : { [props.size]: presetSize },
    kind: { [props.kind]: presetKind },
  } } = theme.button

  const [buttonRef, setRef] = functionRef<buttonNode>(props.innerRef)
  const groupContext = useContext(GroupContext)

  const [positions, setPositions] = useState<string>('')

  useEffect(() => {
    if (groupContext && buttonRef !== null) {
      groupContext.elements.current.push(buttonRef)
      
      let node: HTMLElement | null = buttonRef
      let prevNode: HTMLElement | null = null
  
      while (node) { 
        if (node.matches('[role*=group]')) {
          let pos = []
          node.firstElementChild === prevNode && (pos.push('first'))
          node.lastElementChild === prevNode && (pos.push('last'))
          
          setPositions(pos.join(' '))
          break
        } else {
          prevNode = node
          node = node.parentElement
        }
      } 
    }
  }, [buttonRef])

  // Necessary when rendering an `a` element, which doesn't use `disabled`
  const aria: {[key: string]: any} = {
    'aria-disabled': props.disabled,
    'aria-busy': props.loading,
    tabIndex: props.disabled ? -1 : undefined,
  }

  if (props.as === 'a') {
    props.type = undefined
  }

  if (props.innerRef) {
    props.ref = setRef
  }

  if (groupContext) {
    props.block = groupContext.block
    props.ref = setRef
    props['data-group'] = (`${groupContext.orientation} ${positions}`).trim()
  }

  if (groupContext && groupContext.onClick) {
    const checked = groupContext.checked && groupContext.checked.includes(props.value)
    const isFirstChecked = !groupContext.checked && positions.includes('first')

    aria['aria-checked'] = checked
    aria.role = groupContext.mode
    aria.tabIndex = (checked && !props.disabled) || isFirstChecked || groupContext.mode !== 'radio' ? 0 : -1
    props.onClick = groupContext.onClick || props.onClick
    props.onKeyDown = groupContext.onKeyDown
  }

  return (
    <ButtonBox {...presetKind.Button} {...presetSize.Button} {...props} {...aria}>
      <Text {...presetKind.Text} {...presetSize.Text} crop color='inherit'>{ children }</Text>
    </ButtonBox>
  )
}

Button.defaultProps = {
  size: 'm',
  kind: 'default',
  variant: 'primary',
  type: 'button',
  loading: false,
}

export default Button