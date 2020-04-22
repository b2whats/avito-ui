import React, { isValidElement } from 'react'
import { filterProps } from '../../utils/'
import { useRefHook } from '../../hooks/'
import { useTheme, mergeTheme } from '../../theme/'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { Text as TextComponent } from '../Text/'
import { Icon, IconProps } from '../Icon/'
import { Spinner as SpinnerComponent } from '../Spinner/'
import { useGroupHook } from '../Layout/Group'
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

    ${ themeStyle.overlay ? `
      &::before {
        content: "";
        position: absolute;
        pointer-events: none;
        left: -${themeStyle.borderWidth}px;
        right: -${themeStyle.borderWidth}px;
        top: -${themeStyle.borderWidth}px;
        bottom: -${themeStyle.borderWidth}px;
        border-radius: ${themeStyle.borderRadius}px;
        background: ${themeStyle.overlay};
      }
    ` : '' }

    ${textRules}
  `)
)

export const Button = React.forwardRef(({ override, ...props }: ButtonProps, ref: React.Ref<HTMLButtonElement | HTMLLinkElement>) => {
  const theme = useTheme()
  const componentTheme = mergeTheme(buttonTheme, theme.Button, override)

  props = {
    ...componentTheme.defaultProps,
    ...props,
    disabled: props.disabled || props.loading,
  }

  if (props.href) {
    props.type = undefined
  }

  const [componentRef, setRef] = useRefHook(ref)
  const groupProps = useGroupHook(componentRef, props)

  const aria = {
    'aria-checked': groupProps.checked,
    'aria-disabled': groupProps.disabled,
    'aria-busy': groupProps.loading,
  }

  const { Button, Text, IconBefore, IconAfter, Spinner } = foldThemeParams(groupProps, componentTheme)
  const buttonStyle = buttonClassName(groupProps, theme, Button.style)

  const Tag = props.href ? 'a' : 'button'

  const renderIconSlot = (icon: ButtonProps['iconBefore'] | ButtonProps['iconAfter'], iconProps: IconProps) => (
    typeof icon === 'string' ? <Icon name={icon} {...iconProps} /> :
    typeof icon === 'function' ? icon(iconProps) :
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
})

Button.displayName = 'Button'

export default Button