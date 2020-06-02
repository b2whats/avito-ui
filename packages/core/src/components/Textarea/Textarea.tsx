import React, { useState } from 'react'
import { setNativeValue, invokeAll } from '../../utils/'
import { useUncontrolledInputHook } from '../../hooks/'
import { uiComponent } from '../../theme/'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { TextareaCore } from './TextareaCore'
import { TextareaProps } from './contract'
import { textareaTheme } from './theme'

const wrapperClassName = createClassName<TextareaProps, typeof textareaTheme>(
  (themeStyle, props) => ({
    display: 'flex',
    valign: 'top',
    ...themeStyle,
    ...props,
  })
)


export const Textarea = uiComponent('Textarea', textareaTheme)<TextareaProps, HTMLTextAreaElement>((
  { onFocus, onBlur, ...props },
  { theme, tokens },
  [textareaRef, setTextareaRef]
) => {
  const [focus, setFocus] = useState(false)
  const [value, onChange] = useUncontrolledInputHook(props)
  const hasClear = Boolean(props.clearable)

  props = {
    ...props,
    value,
    onChange,
    clearable: Boolean(value && !props.disabled && (props.clearable === 'always' || props.clearable && focus)),
    placeholder: theme.deletePlaceholderOnFocus && focus ? '' : props.placeholder,
  }

  const handleFocus = invokeAll(() => setFocus(true), onFocus)
  const handleBlur = invokeAll(() => setFocus(false), onBlur)

  const handlePreventBlur = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target['tagName'] !== 'TEXTAREA') event.preventDefault()
  }

  const handleClear = () => {
    setNativeValue(textareaRef.current, '')
  }

  const { Textarea, IconClear } = foldThemeParams(props, theme)
  const wrapperStyle = wrapperClassName(props, tokens, Textarea.style)

  const elementState = `${props.disabled ? 'disabled' : ''} ${focus ? 'focus' : ''}`

  return (
    <label css={wrapperStyle} data-state={elementState} onMouseDown={handlePreventBlur}>
      <TextareaCore {...props} ref={setTextareaRef} onFocus={handleFocus} onBlur={handleBlur}/>
      { hasClear && <IconClear.component
        {...IconClear.props}
        valignSelf={undefined}
        onClick={handleClear} /> }
    </label>
  )
})
