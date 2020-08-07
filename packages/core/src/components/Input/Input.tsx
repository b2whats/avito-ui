import React, { isValidElement } from 'react'
import { useUncontrolledInputHook, useSyntheticChange, useFocus } from '../../hooks/'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { uiComponent } from '../../theme/'
import { clearValue } from '../../utils/'
import { IconProps } from '../Icon/'
import { Text, TextProps } from '../Text/'
import { InputProps } from './contract'
import { InputCore } from './InputCore'
import { inputTheme } from './theme'

const inputClassName = createClassName<InputProps, typeof inputTheme>({
  display: 'flex',
  mapPropsToStyle: true,
  cssRewrite: (textRules) => `
    position: relative;
    font-family: inherit;
    align-items: center;

    ${textRules}
  `,
})

const inputFieldClassName = createClassName<InputProps, typeof inputTheme>({
  display: 'flex',
  cssRewrite: (textRules) => `
    height: 100%;
    overflow: hidden;

    ${textRules}
  `,
})

export const Input = uiComponent('Input', inputTheme)<InputProps, HTMLInputElement>((
  { mask, ...props },
  { theme, tokens, testId, ref }
) => {
  const renderCore = props.renderCore || (props => <InputCore {...props} />)
  const [focus, focusProps] = useFocus(props)
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
    placeholder: props.deletePlaceholderOnFocus && focus ? '' : props.placeholder,
  }

  // Отменяем моргание фокуса при повторных кликах внутри контейнера с инпутом
  // Проверка нужна что бы не блокировать выделениие в самом инпуте
  const handlePreventBlur = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target !== ref.current) event.preventDefault()
  }

  const handleClear = () => clearValue(ref.current)

  const { Input, IconBefore, IconAfter, InputField, Prefix, Postfix } = foldThemeParams(props, theme)
  const inputStyle = inputClassName(props, tokens, Input)
  const inputFieldStyle = inputFieldClassName(props, tokens, InputField)

  const renderIconSlot = (icon: InputProps['iconBefore'] | InputProps['iconAfter'], iconProps: IconProps) => (
    typeof icon === 'function' ? icon({ ...props, iconProps, focus, handleClear }) :
    isValidElement(icon) ? <icon.type {...iconProps} {...icon.props} /> :
    undefined
  )

  const textColor = (activeColor?: any) => focus || props.value ? activeColor : Input.placeholderColor
  const renderTextSlot = (text: InputProps['prefix'] | InputProps['postfix'], textProps: TextProps) => (
    typeof text === 'string' ? <Text {...textProps} color={textColor()} pre>{text}</Text> :
    typeof text === 'function' ? text({ ...props, focus }) :
    React.isValidElement(text) ? <text.type {...textProps} {...text.props} color={textColor(text.props.color)} /> :
    undefined
  )

  const iconAfter = renderIconSlot(
    IconAfter.component ? <IconAfter.component /> : props.iconAfter,
    clearable ? { ...IconAfter, onClick: handleClear, ...testId('clear') } : { ...IconAfter, ...testId('iconAfter') }
  )

  const elementState = `${props.disabled ? 'disabled' : ''} ${focus ? 'focus' : ''}`

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <label css={inputStyle} data-state={elementState} onMouseDown={handlePreventBlur} {...testId()}>
      {props.iconBefore && renderIconSlot(props.iconBefore, { ...IconBefore, ...testId('iconBefore')})}
      <div css={inputFieldStyle}>
        {props.prefix && renderTextSlot(props.prefix, Prefix)}
        {renderCore({
          ...props,
          ...focusProps,
          onChange,
          autoSize: Boolean(props.postfix),
          ref,
          ...testId('input'),
        })}
        {props.postfix && renderTextSlot(props.postfix, Postfix)}
      </div>
      {iconAfter}
    </label>
  )
})
