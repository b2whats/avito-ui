import React, { isValidElement } from 'react'
import { useTheme, useRefHook, filterProps } from '../../utils'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { Text as TextComponent } from '../Text/'
import { Icon, IconProps } from '../Icon/'
import { Spinner as SpinnerComponent } from '../Spinner/'
import { useGroupHook } from '../Layout/Group'
import { ButtonProps } from './contract'
import { ButtonTheme } from './theme'

const buttonClassName = createClassName<ButtonProps, ButtonTheme>(
  (themeStyle, props) => ({
    display: 'inline-block',
    shrink: false,
    ...themeStyle,
    ...props,
    ...(props.shape === 'circle' || props.shape === 'square') && { p: 'none' },
  }),
  (textRules, { kind }, { button }, themeStyle) => (`
    font-family: inherit;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    margin: 0;
    line-height: 1;
    position: relative;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    &::-moz-focus-inner {
      border: 0;
    }

    &[data-group] {
      box-shadow: none;
    }

    ${button.pressOffset[kind] ? `
      &:active > * {
        transform: translateY(${button.pressOffset[kind]}px);
      }
    ` : ''}


    &[data-group~='horizontal']:not([data-group~='last']):not([data-group~='spacing']) {
      margin-right: ${kind === 'outline' ? '-' : ''}${themeStyle.borderWidth}px;
      border-bottom-right-radius: 0px;
      border-top-right-radius: 0px;
    }

    &[data-group~='horizontal']:not([data-group~='first']):not([data-group~='spacing']) {
      border-bottom-left-radius: 0px;
      border-top-left-radius: 0px;
    }

    &[data-group~='vertical']:not([data-group~='last']):not([data-group~='spacing']) {
      margin-bottom: ${kind === 'outline' ? '-' : ''}${themeStyle.borderWidth}px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    &[data-group~='vertical']:not([data-group~='first']):not([data-group~='spacing']) {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }

    a& {
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }

    & > [data-icon='spinner'] {
      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }

    &[aria-busy='true'] > :not([data-icon='spinner']) {
      visibility: hidden;
    }
    
    ${textRules}
  `)
)

const Button = ({ innerRef, ...props }: ButtonProps) => {
  const theme = useTheme()

  props = {
    size: 'm',
    preset: 'primary',
    type: 'button',
    ...props,
    disabled: props.disabled || props.loading,
  }

  if (props.href) {
    props.type = undefined
    props.href = props.disabled ? undefined : props.href
  }
  
  const [ref, setRef] = useRefHook(innerRef)
  const groupProps = useGroupHook(ref, props)
  
  const aria = {
    'aria-checked': groupProps.checked,
    'aria-disabled': groupProps.disabled,
    'aria-busy': groupProps.loading,
  }

  const { Button, Text, IconBefore, IconAfter, Spinner } = foldThemeParams(theme.button, groupProps)
  const buttonStyle = buttonClassName(groupProps, theme, Button.style)

  const Tag = props.href ? 'a' : 'button'

  const renderIconSlot = (icon: ButtonProps['iconBefore'] | ButtonProps['iconAfter'], iconProps: IconProps) => (
    typeof icon === 'string' ? <Icon name={icon} {...iconProps} /> :
    typeof icon === 'function' ? icon({ ...props, iconProps }) :
    isValidElement(icon) ? <icon.type {...iconProps} {...icon.props} /> :
    undefined
  )
  
  return (
    <Tag css={buttonStyle} ref={setRef} {...aria} {...filterProps(groupProps)} >
      {props.loading && <SpinnerComponent {...Spinner.props}/>}
      {props.iconBefore && renderIconSlot(props.iconBefore, IconBefore.props)}
      {props.children && <TextComponent {...Text.props} crop valignSelf='middle' dense>{ props.children }</TextComponent>}
      {props.iconAfter && renderIconSlot(props.iconAfter, IconAfter.props)}
    </Tag>
  )
}

export default Button