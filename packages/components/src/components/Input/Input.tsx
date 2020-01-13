import React, { isValidElement, useState } from 'react'
import { useTheme, setNativeValue } from '../../utils/'
import { useRefHook } from '../../hooks/'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { Icon, IconProps } from '../Icon/'
import { Text } from '../Text/'
import { InputCore } from './'
import { InputProps } from './contract'
import { InputTheme } from './theme'

const inputClassName = createClassName<InputProps, InputTheme>(
  (themeStyle, props) => ({
    display: 'flex',
    width: 1,
    ...themeStyle,
    ...props,
  }),
  (textRules) => (`
    position: relative;
    font-family: inherit;
    align-items: center;
    -webkit-tap-highlight-color: rgba(0,0,0,0);

    ${textRules}
  `)
)

const inputFieldClassName = createClassName<InputProps, InputTheme>(
  (themeStyle) => ({
    display: 'flex',
    valign: 'baseline',
    grow: true,
    ...themeStyle,
  })
)

export const Input: React.RefForwardingComponent<
  React.Ref<HTMLInputElement>,
  InputProps
> = React.forwardRef(({ onFocus, onBlur, onMouseDown, ...props }: InputProps, ref) => {
  const theme = useTheme()
  const [inputRef, setInputRef] = useRefHook(ref)
  const [focus, setFocus] = useState(false)

  props = {
    variant: 'primary',
    size: 'm',
    type: 'text',
    ...props,
    clearable: props.clearable === 'always' || Boolean(props.clearable && props.value && focus),
    placeholder: theme.input.deletePlaceholderOnFocus && focus ? '' : props.placeholder,
  }

  const handleFocus: InputProps['onFocus'] = (event) => {
    setFocus(true)
    onFocus && onFocus(event)
  }

  const handleBlur: InputProps['onBlur'] = (event) => {
    setFocus(false)
    onBlur && onBlur(event)
  }

  const handleMouseDown: InputProps['onMouseDown'] = (event) => {
    event.stopPropagation()
    onMouseDown && onMouseDown(event)
  }

  const handlePreventBlur = (event: React.MouseEvent<HTMLLabelElement>) => {
    focus && event.preventDefault()
  }

  const handlePreventFocus = (onClick: any) => (event: React.MouseEvent<HTMLLabelElement>) => {
    if (onClick) {
      event.preventDefault()

      onClick(event)
    }
  }

  const handleClear = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setNativeValue(inputRef.current, '')
  }

  const { Input, IconClear, IconBefore, IconAfter, InputField } = foldThemeParams<InputTheme>(theme.input, props)
  const inputStyle = inputClassName(props, theme, Input.style)
  const inputFieldStyle = inputFieldClassName(props, theme, InputField.style)

  const renderIconSlot = (icon: InputProps['iconBefore'] | InputProps['iconAfter'], iconProps: IconProps) => (
    typeof icon === 'string' ? <Icon name={icon} {...iconProps} /> :
    typeof icon === 'function' ? icon({ ...props, iconProps, focus, handleClear, handlePreventFocus }) :
    isValidElement(icon) ? <icon.type {...iconProps} {...icon.props} onClick={handlePreventFocus(icon.props.onClick)} /> :
    undefined
  )

  const renderTextSlot = (text: InputProps['prefix'] | InputProps['postfix']) => (
    typeof text === 'string' ? <Text color={focus || props.value ? undefined : Input.style.placeholderColor as any} pre>{text}</Text> :
    typeof text === 'function' ? text({ ...props, focus }) :
    React.isValidElement(text) ? <text.type {...text.props} color={focus || props.value ? text.props.color : Input.style.placeholderColor} pre/> :
    undefined
  )

  const iconAfter = props.clearable
    ? <Icon {...IconAfter.props} {...IconClear.props} onClick={handleClear} />
    : renderIconSlot(props.iconAfter, IconAfter.props)

  const elementState = `${props.disabled ? 'disabled' : ''} ${focus ? 'focus' : ''}`

  return (
    <label css={inputStyle} data-state={elementState} onMouseDown={handlePreventBlur}>
      {props.iconBefore && renderIconSlot(props.iconBefore, IconBefore.props)}
      <div css={inputFieldStyle}>
        {props.prefix && renderTextSlot(props.prefix)}
        <InputCore {...props} autoSize={props.postfix ? true : false} ref={setInputRef} onMouseDown={handleMouseDown} onFocus={handleFocus} onBlur={handleBlur}/>
        {props.postfix && renderTextSlot(props.postfix)}
      </div>
      {iconAfter}
    </label>
  )
})

Input.displayName = 'Input'

export default Input