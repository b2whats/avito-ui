import React, { isValidElement, useState } from 'react'
import { useUncontrolledInputHook, useSyntheticChange } from '../../hooks/'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { uiComponent } from '../../theme/'
import { clearValue, invokeAll } from '../../utils/'
import { IconProps } from '../Icon/'
import { Text, TextProps } from '../Text/'
import { InputProps } from './contract'
import { InputCore } from './InputCore'
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

export const Input = uiComponent('Input', inputTheme)<InputProps, HTMLInputElement>((
  { onFocus, onBlur, mask, ...props },
  { theme, tokens },
  [inputRef, setRef]
) => {
  const renderCore = props.renderCore || (p => <InputCore {...p} />)
  const [focus, setFocus] = useState(false)
  const [safeValue, safeOnChange] = useUncontrolledInputHook(props)
  const [value, onChange] = useSyntheticChange(safeValue, safeOnChange, mask)
  const clearable = Boolean(
    value &&
    !props.disabled && !props.readOnly &&
    (props.clearable === 'always' || props.clearable && focus))

  props = {
    ...props,
    value,
    clearable,
    // apply iconAfter theme if clearable
    iconAfter: clearable ? true : props.iconAfter,
    placeholder: inputTheme.deletePlaceholderOnFocus && focus ? '' : props.placeholder,
  }

  const handleFocus = invokeAll(() => setFocus(true), onFocus)
  const handleBlur = invokeAll(() => setFocus(false), onBlur)

  // Отменяем моргание фокуса при повторных кликах внутри контейнера с инпутом
  // Проверка нужна что бы не блокировать выделениие в самом инпуте
  const handlePreventBlur = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target !== inputRef.current) event.preventDefault()
  }

  const handleClear = () => clearValue(inputRef.current)

  const { Input, IconBefore, IconAfter, InputField, Prefix, Postfix } = foldThemeParams(props, theme)
  const inputStyle = inputClassName(props, tokens, Input.style)
  const inputFieldStyle = inputFieldClassName(props, tokens, InputField.style)

  const renderIconSlot = (icon: InputProps['iconBefore'] | InputProps['iconAfter'], iconProps: IconProps) => (
    typeof icon === 'function' ? icon({ ...props, iconProps, focus, handleClear }) :
    isValidElement(icon) ? <icon.type {...iconProps} {...icon.props} /> :
    undefined
  )

  const textColor = (activeColor?: any) => focus || props.value ? activeColor : Input.style.placeholderColor
  const renderTextSlot = (text: InputProps['prefix'] | InputProps['postfix'], textProps: TextProps) => (
    typeof text === 'string' ? <Text {...textProps} color={textColor()} pre>{text}</Text> :
    typeof text === 'function' ? text({ ...props, focus }) :
    React.isValidElement(text) ? <text.type {...textProps} {...text.props} color={textColor(text.props.color)} /> :
    undefined
  )

  const iconAfter = renderIconSlot(
    IconAfter.component ? <IconAfter.component /> : props.iconAfter,
    clearable ? { ...IconAfter.props, onClick: handleClear } : IconAfter.props
  )

  const elementState = `${props.disabled ? 'disabled' : ''} ${focus ? 'focus' : ''}`

  return (
    <label css={inputStyle} data-state={elementState} onMouseDown={handlePreventBlur}>
      {props.iconBefore && renderIconSlot(props.iconBefore, IconBefore.props)}
      <div css={inputFieldStyle}>
        {props.prefix && renderTextSlot(props.prefix, Prefix.props)}
        {renderCore({
          ...props,
          onChange,
          autoSize: Boolean(props.postfix),
          ref: setRef,
          onFocus: handleFocus,
          onBlur: handleBlur,
        })}
        {props.postfix && renderTextSlot(props.postfix, Postfix.props)}
      </div>
      {iconAfter}

    </label>
  )
})
