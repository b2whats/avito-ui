import React, { useState } from 'react'
import { setNativeValue } from '../../utils/'
import { useRefHook, useUncontrolledInputHook } from '../../hooks/'
import { useTheme, mergeTheme } from '../../theme/'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { Icon } from '../Icon/'
import { TextareaCore } from './TextareaCore'
import { TextareaProps } from './contract'
import { textareaTheme ,TextareaTheme } from './theme'

const wrapperClassName = createClassName<TextareaProps, typeof textareaTheme>(
  (themeStyle, props) => ({
    display: 'flex',
    valign: 'top',
    ...themeStyle,
    ...props,
  })
)

export const Textarea = React.forwardRef(({ override, onFocus, onBlur, ...props }: TextareaProps, ref: React.Ref<HTMLTextAreaElement>) => {
  const theme = useTheme()
  const componentTheme = mergeTheme(textareaTheme, theme.Textarea, override)
  const [textareaRef, setTextareaRef] = useRefHook(ref)
  const [focus, setFocus] = useState(false)
  const [value, onChange] = useUncontrolledInputHook(props)

  props = {
    variant: 'primary',
    size: 'm',
    ...props,
    value,
    onChange,
    clearable: props.clearable === 'always' || Boolean(props.clearable && value && focus),
    placeholder: componentTheme.deletePlaceholderOnFocus && focus ? '' : props.placeholder,
  }

  const handleFocus: TextareaProps['onFocus'] = (event) => {
    setFocus(true)
    onFocus && onFocus(event)
  }

  const handleBlur: TextareaProps['onBlur'] = (event) => {
    setFocus(false)
    onBlur && onBlur(event)
  }

  const handlePreventBlur = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target['tagName'] !== 'TEXTAREA') event.preventDefault()
  }

  const handleClear = () => {
    setNativeValue(textareaRef.current, '')
  }

  const { Textarea, IconClear } = foldThemeParams<TextareaTheme>(props, componentTheme)
  const wrapperStyle = wrapperClassName(props, theme, Textarea.style)

  const elementState = `${props.disabled ? 'disabled' : ''} ${focus ? 'focus' : ''}`

  return (
    <label css={wrapperStyle} data-state={elementState} onMouseDown={handlePreventBlur}>
      <TextareaCore {...props} ref={setTextareaRef} onFocus={handleFocus} onBlur={handleBlur}/>
      {props.clearable && <Icon {...IconClear.props} onClick={handleClear} />}
    </label>
  )
})

Textarea.displayName = 'Textarea'

export default Textarea