import React, { useState } from 'react'
import { useRefHook, setNativeValue } from '../../utils/'
import { useThemeMemo } from '../../theme/'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { Icon } from '../Icon'
import { TextareaCore } from './TextareaCore'
import { TextareaProps } from './contract'
import { createTextareaTheme ,TextareaTheme } from './theme'

const wrapperClassName = createClassName<TextareaProps, TextareaTheme>(
  (themeStyle, props) => ({
    display: 'flex',
    valign: 'top',
    ...themeStyle,
    ...props,
  })
)

type Textarea = React.RefForwardingComponent<React.Ref<HTMLElement>, TextareaProps>

export const Textarea: Textarea = React.forwardRef(({ override, onFocus, onBlur, ...props }: TextareaProps, ref) => {
  const [theme, textareaTheme] = useThemeMemo(createTextareaTheme, override)
  const [textareaRef, setTextareaRef] = useRefHook(ref)
  const [focus, setFocus] = useState(false)

  props = {
    variant: 'primary',
    size: 'm',
    ...props,
    clearable: props.clearable === 'always' || Boolean(props.clearable && props.value && focus),
    placeholder: textareaTheme.deletePlaceholderOnFocus && focus ? '' : props.placeholder,
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
    event.preventDefault()
  }

  const handleClear = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setNativeValue(textareaRef.current, '')
  }

  const { Textarea, IconClear } = foldThemeParams<TextareaTheme>(props, textareaTheme)
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