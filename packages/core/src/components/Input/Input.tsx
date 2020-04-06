import React, { isValidElement, useState } from 'react'
import { setNativeValue } from '../../utils/'
import { useTheme, mergeTheme } from '../../theme/'
import { useRefHook } from '../../hooks/'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { Icon, IconProps } from '../Icon/'
import { Text, TextProps } from '../Text/'
import { InputCore } from './InputCore'
import { InputProps } from './contract'
import { inputTheme } from './theme'


const inputClassName = createClassName<InputProps, typeof inputTheme>(
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

const inputFieldClassName = createClassName<InputProps, typeof inputTheme>(
  (themeStyle) => ({
    display: 'flex',
    valign: 'middle',
    grow: true,
    ...themeStyle,
  }),
  (textRules) => (`
    height: 100%;
    overflow: hidden;

    ${textRules}
  `)
)

export const Input = React.forwardRef(({ onFocus, onBlur, override, ...props }: InputProps, ref: React.Ref<HTMLInputElement>) => {
  const theme = useTheme()
  const componentTheme = mergeTheme(inputTheme, theme.Input, override)
  const [inputRef, setInputRef] = useRefHook(ref)
  const [focus, setFocus] = useState(false)

  props = {
    variant: 'primary',
    size: 'm',
    type: 'text',
    ...props,
    ...'value' in props && !props.onChange && { defaultValue: props.value, value: undefined },
    clearable: props.clearable === 'always' || Boolean(props.clearable && props.value && focus),
    placeholder: inputTheme.deletePlaceholderOnFocus && focus ? '' : props.placeholder,
  }

  const handleFocus: InputProps['onFocus'] = (event) => {
    setFocus(true)
    onFocus && onFocus(event)
  }

  const handleBlur: InputProps['onBlur'] = (event) => {
    setFocus(false)
    onBlur && onBlur(event)
  }

  // Отменяем моргание фокуса при повторных кликах
  const handlePreventBlur = (event: React.MouseEvent<HTMLLabelElement>) => {
    event.preventDefault()
  }

  const handleClear = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setNativeValue(inputRef.current, '')
  }
  
  const { Input, IconClear, IconBefore, IconAfter, InputField, Prefix, Postfix } = foldThemeParams(props, componentTheme)
  const inputStyle = inputClassName(props, theme, Input.style)
  const inputFieldStyle = inputFieldClassName(props, theme, InputField.style)

  const renderIconSlot = (icon: InputProps['iconBefore'] | InputProps['iconAfter'], iconProps: IconProps) => (
    typeof icon === 'string' ? <Icon {...iconProps} name={icon} /> :
    typeof icon === 'function' ? icon({ ...props, iconProps, focus, handleClear }) :
    isValidElement(icon) ? <icon.type {...iconProps} {...icon.props} /> :
    undefined
  )

  const renderTextSlot = (text: InputProps['prefix'] | InputProps['postfix'], textProps: TextProps) => (
    typeof text === 'string' ? <Text {...textProps} color={focus || props.value ? undefined : Input.style.placeholderColor as any} pre>{text}</Text> :
    typeof text === 'function' ? text({ ...props, focus }) :
    React.isValidElement(text) ? <text.type {...textProps} {...text.props} color={focus || props.value ? text.props.color : Input.style.placeholderColor}/> :
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
        {props.prefix && renderTextSlot(props.prefix, Prefix.props)}
        <InputCore {...props} autoSize={props.postfix ? true : false} ref={setInputRef} onFocus={handleFocus} onBlur={handleBlur}/>
        {props.postfix && renderTextSlot(props.postfix, Postfix.props)}
      </div>
      {iconAfter}
    </label>
  )
})

Input.displayName = 'Input'

export default Input