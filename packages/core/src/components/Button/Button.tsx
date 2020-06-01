import React, { isValidElement, ReactNode } from 'react'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { uiComponent } from '../../theme/'
import { filterProps } from '../../utils/'
import { IconProps } from '../Icon/'
import { useGroupHook } from '../Layout/Group'
import { Spinner as SpinnerComponent } from '../Spinner/'
import { Text as TextComponent, TextProps } from '../Text/'
import { ButtonProps } from './contract'
import { buttonTheme } from './theme'

const buttonClassName = createClassName<ButtonProps, typeof buttonTheme, 'Button'>(
  (themeStyle, props) => ({
    display: 'inline-block',
    shrink: false,
    ...themeStyle,
    ...props,
    ...(props.shape === 'circle' || props.shape === 'square') && { p: 'none' },
  }),
  (textRules, { kind }, _, themeStyle) => (`
    font-family: inherit;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    margin: 0;
    line-height: 0;
    position: relative;
    white-space: nowrap;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    &::-moz-focus-inner {
      border: 0;
    }

    &[data-group] {
      box-shadow: none;
    }

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

    ${ themeStyle.pressedOffset ? `
      &:not(:disabled):active > *, &[data-state~=active] > *  {
        transform: translateY(1px);
      }
    ` : '' }

    &[aria-busy='true'] > :not([data-icon='spinner']) {
      visibility: hidden;
    }

    ${textRules}
  `)
)

export const Button = uiComponent('Button', buttonTheme)<
  ButtonProps,
  HTMLButtonElement | HTMLLinkElement
>((props, { theme, tokens }, [ref, setRef]) => {
  props.type = props.href ? undefined : props.type
  const groupProps = useGroupHook(ref, props)

  const aria = {
    'aria-checked': groupProps.checked,
    'aria-disabled': groupProps.disabled,
    'aria-busy': groupProps.loading,
  }

  const { Button, Text, IconBefore, IconAfter, Spinner } = foldThemeParams(groupProps, theme)
  const buttonStyle = buttonClassName(groupProps, tokens, Button.style)

  const Tag = props.href ? 'a' : 'button'

  const renderIconSlot = (icon: ButtonProps['iconBefore'] | ButtonProps['iconAfter'], iconProps: IconProps) => (
    typeof icon === 'function' ? icon(iconProps) :
    isValidElement(icon) ? <icon.type {...iconProps} {...icon.props} /> :
    undefined
  )
  const renderTextSlot = (children: ReactNode, props: TextProps) => (
    isValidElement(children) ? <children.type {...props} {...children.props} /> :
    typeof children === 'function' ? children(props) :
    <TextComponent {...props}>{ children }</TextComponent>
  )

  return (
    <Tag css={buttonStyle} ref={setRef} {...aria} {...filterProps(groupProps)} >
      {props.loading &&
        <SpinnerComponent {...Spinner.props} />}
      {props.iconBefore &&
        renderIconSlot(props.iconBefore, IconBefore.props)}
      {props.children &&
        renderTextSlot(props.children, Text.props)}
      {props.iconAfter &&
        renderIconSlot(props.iconAfter, IconAfter.props)}
    </Tag>
  )
})
