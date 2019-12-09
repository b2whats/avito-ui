import React from 'react'
import { useTheme, useRefHook, filterProps } from '../../utils'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { Text as TextComponent } from '../Text/'
import { Icon } from '../Icon/'
import { Spinner as SpinnerComponent } from '../Spinner/'
import { useGroupHook } from '../Layout/Group'
import { ButtonProps } from './contract'
import { ButtonTheme } from './theme'

const buttonClassName = createClassName<ButtonProps, ButtonTheme>(
  (themeStyle, props) => ({
    display: 'inline-block',
    ...themeStyle,
    ...props,
    ...(props.shape === 'circle' || props.shape === 'square') && { p: 'none' },
  }),
  (textRules, { kind }, { button }, themeStyle) => (`
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
      margin-right: ${kind === 'outline' ? '-' : ''}${themeStyle.borderWidth};
      border-bottom-right-radius: 0px;
      border-top-right-radius: 0px;
    }

    &[data-group~='horizontal']:not([data-group~='first']) {
      border-bottom-left-radius: 0px;
      border-top-left-radius: 0px;
    }

    &[data-group~='vertical']:not([data-group~='last']) {
      margin-bottom: ${kind === 'outline' ? '-' : ''}${themeStyle.borderWidth};
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

    & > [data-component='spinner'] {
        position: absolute;
        margin: 0 auto;
        left: 0;
        right: 0;
    }

    &[aria-busy='true'] > :not([data-component='spinner']) {
      visibility: hidden;
    }
    
    ${textRules}
  `),
)

const Button = ({ innerRef, ...props }: ButtonProps) => {
  const theme = useTheme()

  props = {
    size: 'm',
    kind: 'default',
    variant: 'primary',
    type: 'button',
    ...props,
    disabled: props.disabled || props.loading,
  }

  if (props.href) {
    props.type = undefined
    props.href = props.disabled ? undefined : props.href
  }

  const aria = {
    'aria-disabled': props.disabled,
    'aria-busy': props.loading,
  }

  const [ref, setRef] = useRefHook(innerRef)
  const groupProps = useGroupHook(ref, props)
  const mergeProps = {...props, ...groupProps}

  const { Button, Text, IconBefore, IconAfter, Spinner } = foldThemeParams<ButtonTheme>(theme.button, mergeProps)
  const buttonStyle = buttonClassName(mergeProps, theme, Button.style)

  const Tag = props.href ? 'a' : 'button'

  const renderIconSlot = (icon: InputProps['iconBefore'] | InputProps['iconAfter'], iconProps: IconProps) => (
    typeof icon === 'string' ? <Icon name={icon} {...iconProps} /> :
    typeof icon === 'function' ? icon({ ...props, iconProps, focus, handleClear, handlePreventFocus }) :
    isValidElement(icon) ? <icon.type {...iconProps} {...icon.props} onClick={handlePreventFocus(icon.props.onClick)} /> :
    undefined
  )

  return (
    <Tag css={buttonStyle} ref={setRef} {...aria} {...filterProps(mergeProps)}>
      {props.loading && <SpinnerComponent {...Spinner.props}/>}
      {props.iconBefore && <Icon name={props.iconBefore} {...IconBefore.props} />}
      {props.children && <TextComponent {...Text.props} crop valignSelf='middle' dense>{ props.children }</TextComponent>}
      {props.iconAfter && <Icon name={props.iconAfter} {...IconAfter.props} />}
    </Tag>
  )
}

export default Button