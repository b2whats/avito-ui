import React from 'react'
import { useTheme, useRefHook, filterProps } from '../../utils'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { Text as TextComponent } from '../Text/'
import { Icon } from '../Icon/'
import { useGroupHook } from '../Layout/Group'
import { ButtonProps } from './contract'
import { ButtonTheme } from './theme'

const buttonClassName = createClassName<ButtonProps, ButtonTheme>(
  (themeStyle, props, { dimension: { rowHeight } }) => ({
    display: 'inline-block',
    ...themeStyle,
    ...props,
    ...props.block && { width: 1 },
    ...(props.square || props.circle) && {
      width: rowHeight[themeStyle.minHeight! || themeStyle.height!],
      height: themeStyle.minHeight,
      minHeight: undefined,
      p: 'none',
    },
    ...props.circle && { borderRadius: 'rounded'},
  }),
  (textRules, { kind }, { button }, style) => (`
    box-sizing: border-box;
    font-family: inherit;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    margin: 0;
    line-height: 1;
    position: relative;

    &::-moz-focus-inner {
      border: 0;
    }

    &[data-group] {
      box-shadow: none;
    }

    &:active > * {
      transform: translateY(${button.pressOffset[kind]}px);
    }

    &[data-group~='horizontal']:not([data-group~='last']) {
      margin-right: ${kind === 'outline' ? '-' : ''}${style.borderWidth};
      border-bottom-right-radius: 0px;
      border-top-right-radius: 0px;
    }

    &[data-group~='horizontal']:not([data-group~='first']) {
      border-bottom-left-radius: 0px;
      border-top-left-radius: 0px;
    }

    &[data-group~='vertical']:not([data-group~='last']) {
      margin-bottom: ${kind === 'outline' ? '-' : ''}${style.borderWidth};
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    &[data-group~='vertical']:not([data-group~='first']) {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }

    a& {
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
    
    ${textRules}
  `),
)

const Button = ({ as, innerRef, ...props }: ButtonProps) => {
  const theme = useTheme()

  props = {
    size: 'm',
    kind: 'default',
    variant: 'primary',
    type: 'button',
    ...props,
  }

  if (as === 'a') {
    props.type = undefined
  }

  const aria = {
    'aria-disabled': props.disabled,
    'aria-busy': props.loading,
    tabIndex: props.disabled ? -1 : undefined,
  }

  const [ref, setRef] = useRefHook(innerRef)
  const groupProps = useGroupHook(ref, props)
  const mergeProps = {...props, ...groupProps}

  const { Button, Text, IconBefore, IconAfter } = foldThemeParams<ButtonTheme>(theme.button, mergeProps)
  const buttonStyle = buttonClassName(mergeProps, theme, Button.style)

  const Tag = as || 'button'

  return (
    <Tag css={buttonStyle} ref={setRef} {...aria} {...filterProps(mergeProps)}>
      {props.iconBefore && <Icon name={props.iconBefore} {...IconBefore.props} />}
      {props.children && <TextComponent {...Text.props} crop color='inherit' valignSelf='middle' dense>{ props.children }</TextComponent>}
      {props.iconAfter && <Icon name={props.iconAfter} {...IconAfter.props} />}
    </Tag>
  )
}

export default Button