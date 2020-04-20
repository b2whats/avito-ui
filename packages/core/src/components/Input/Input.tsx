import React, { isValidElement, useState } from 'react'
import { setNativeValue } from '../../utils/'
import { useTheme, mergeTheme } from '../../theme/'
import { useRefHook, useUncontrolledInputHook } from '../../hooks/'
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

export const Input = React.forwardRef(({ type, onFocus, onBlur, override, ...props }: InputProps, ref: React.Ref<HTMLInputElement>) => {
  const theme = useTheme()
  const componentTheme = mergeTheme(inputTheme, theme.Input, override)
  const [inputRef, setRef] = useRefHook(ref)
  const [focus, setFocus] = useState(false)
  const [value, onChange] = useUncontrolledInputHook(props)

  props = {
    variant: 'primary',
    size: 'm',
    ...props,
    value,
    onChange,
    clearable: Boolean(value && (props.clearable === 'always' || props.clearable && focus)),
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

  // Отменяем моргание фокуса при повторных кликах внутри контейнера с инпутом
  // Проверка нужна что бы не блокировать выделениие в самом инпуте
  const handlePreventBlur = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target['tagName'] !== 'INPUT') event.preventDefault()
  }

  const handleClear = () => {
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
  const autoSize = props.postfix ? true : false

  return (
    <label css={inputStyle} data-state={elementState} onMouseDown={handlePreventBlur}>
      {props.iconBefore && renderIconSlot(props.iconBefore, IconBefore.props)}
      <div css={inputFieldStyle}>
        {props.prefix && renderTextSlot(props.prefix, Prefix.props)}
        <InputCore {...props} autoSize={autoSize} ref={setRef} onFocus={handleFocus} onBlur={handleBlur}/>
        {props.postfix && renderTextSlot(props.postfix, Postfix.props)}
      </div>
      {iconAfter}
    </label>
  )
})

Input.displayName = 'Input'