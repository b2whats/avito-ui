import React from 'react'
import { useUncontrolledInputHook, useSyntheticChange, useFocus } from '../../hooks/'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { uiComponent } from '../../theme/'
import { clearValue } from '../../utils/'
import { TextareaProps } from './contract'
import { TextareaCore } from './TextareaCore'
import { textareaTheme } from './theme'

const wrapperClassName = createClassName<TextareaProps, typeof textareaTheme>(
  (themeStyle, props) => ({
    display: 'flex',
    valign: 'top',
    ...themeStyle,
    ...props,
  }),
  (textRules, props) => (`
    ${props.deletePlaceholderOnFocus ? `& *:focus::placeholder {
      color: transparent;
    }` : ''}

    ${textRules}
  `)
)


export const Textarea = uiComponent('Textarea', textareaTheme)<TextareaProps, HTMLTextAreaElement>((
  props,
  { theme, tokens },
  [textareaRef, setTextareaRef],
  testId
) => {
  const [focus, focusProps] = useFocus(props)
  const [value, onChange] = useSyntheticChange(...useUncontrolledInputHook(props))
  const hasClear = Boolean(props.clearable)

  props = {
    ...props,
    value,
    clearable: Boolean(value && !props.disabled && (props.clearable === 'always' || props.clearable && focus)),
  }

  const handlePreventBlur = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target['tagName'] !== 'TEXTAREA') event.preventDefault()
  }

  const handleClear = () => clearValue(textareaRef.current)

  const { Textarea, IconClear } = foldThemeParams(props, theme)
  const wrapperStyle = wrapperClassName(props, tokens, Textarea.style)

  const elementState = `${props.disabled ? 'disabled' : ''} ${focus ? 'focus' : ''}`

  return (
    <label css={wrapperStyle} data-state={elementState} onMouseDown={handlePreventBlur} {...testId()}>
      <TextareaCore
        {...props}
        {...focusProps}
        {...testId('textarea')}
        onChange={onChange}
        ref={setTextareaRef} />
      { hasClear && <IconClear.component
        {...IconClear.props}
        {...testId('clear')}
        valignSelf={undefined}
        onClick={handleClear} /> }
    </label>
  )
})
