import React, { isValidElement, useState } from 'react'
import { useTheme, setNativeValue } from '../../utils/'
import { useRefHook } from '../../hooks/'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { Icon, IconProps } from '../Icon/'
import { Text, TextProps } from '../Text/'
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
  }),
  (textRules) => (`
    overflow: hidden;

    ${textRules}
  `)
)

export const Input: React.RefForwardingComponent<
  React.Ref<HTMLInputElement>,
  InputProps
> = React.forwardRef(({ onFocus, onBlur, onClick, ...props }: InputProps, ref) => {
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

  // Прерываем всплытие события клика, так как клик будет триггерить лейбл и без отмены событие будет вызвано дважды
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    console.log('component click')
    event.stopPropagation()
    onClick && onClick(event)
  }

  // Отменяем моргание фокуса при повторных кликах
  const handlePreventBlur = (event: React.MouseEvent<HTMLLabelElement>) => {
    console.log('component mouse down (label)')
    // Так же мы отменяем и все события по выделению внутри инпута
    // Поэтому если мы нажимаем на input нам не нужно блокировать действие браузера по умолчанию
    if ((event.target as any).tagName === 'INPUT') return

    event.preventDefault()
  }

  const handleClear = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setNativeValue(inputRef.current, '')
  }

  const { Input, IconClear, IconBefore, IconAfter, InputField, Prefix, Postfix } = foldThemeParams<InputTheme>(theme.input, props)
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
        <InputCore {...props} autoSize={props.postfix ? true : false} ref={setInputRef} onClick={handleClick} onFocus={handleFocus} onBlur={handleBlur}/>
        {props.postfix && renderTextSlot(props.postfix, Postfix.props)}
      </div>
      {iconAfter}
    </label>
  )
})

Input.displayName = 'Input'

export default Input