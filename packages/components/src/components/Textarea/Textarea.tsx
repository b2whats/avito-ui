import React, { useState } from 'react'
import { css } from '@emotion/core'
import { useTheme, useRefHook, setNativeValue } from '../../utils'
import { foldThemeParams, createClassName } from '../../styled-system'
import { Icon } from '../Icon'
import { TextareaCore } from '.'
import { TextareaProps } from './contract'
import { TextareaTheme } from './theme'

const wrapperClassName = createClassName<TextareaProps>(
  (_, props) => ({
    display: 'block',
    position: 'relative',
    ...props,
  }),
  (textRules) => `
    && > [data-icon] {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 5;
    }
    ${textRules}
  `,
)

const textareaClassName = createClassName<TextareaProps, TextareaTheme>(
  (themeStyle) => ({
    display: 'block',
    ...themeStyle,
  }),
  (textRules) => (`
    box-sizing: border-box;

    ${textRules}
  `),
)

const Textarea = ({ onFocus, onBlur, ...props}: TextareaProps) => {
  const theme = useTheme()
  const [textareaRef, setTextareaRef] = useRefHook(props.innerRef)
  const [focus, setFocus] = useState(false)

  props = {
    variant: 'primary',
    size: 'm',
    ...props,
    clearable: props.clearable === 'always' || Boolean(props.clearable && props.value && focus),
    placeholder: theme.textarea.deletePlaceholderOnFocus && focus ? '' : props.placeholder,
  }

  const handleFocus: TextareaProps['onFocus'] = (event) => {
    setFocus(true)
    onFocus && onFocus(event)
  }

  const handleBlur: TextareaProps['onBlur'] = (event) => {
    setFocus(false)
    onBlur && onBlur(event)
  }

  const handleClear = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setNativeValue(textareaRef.current, '')
  }

  const { Textarea, IconClear } = foldThemeParams<TextareaTheme>(theme.textarea, props)
  const wrapperStyle = wrapperClassName(props, theme)
  const textareaStyle = textareaClassName(props, theme, Textarea.style)

  return (
    <div css={wrapperStyle}>
      <TextareaCore {...props} innerRef={setTextareaRef} css={textareaStyle} onFocus={handleFocus} onBlur={handleBlur}/>
      {props.clearable && <Icon {...IconClear.props} onClick={handleClear} />}
    </div>
  )
}

export default Textarea