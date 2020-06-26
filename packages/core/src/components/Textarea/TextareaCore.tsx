import React, { useEffect, useLayoutEffect } from 'react'
import { useRefHook } from '../../hooks/'
import { css } from '../../styled-system/'
import { filterProps, invokeAll } from '../../utils/'
import { TextareaCoreProps } from './contract'

const textareaStyle = css`
  resize: none;
  box-sizing: border-box;
  overflow: auto;
  width: 100%;
  min-height: 1em;
  height: 100%;
  padding: 0px;
  margin: 0px;
  border-width: 0;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  outline: none;
  background-color: transparent;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-text-fill-color: currentcolor;

  &[disabled] {
    cursor: inherit;
  }
`

export const TextareaCore = React.memo(React.forwardRef((
  { maxRows, autoSize, resizable, ...props }: TextareaCoreProps,
  ref: React.Ref<HTMLTextAreaElement>
) => {
  const [textarea, setRef] = useRefHook(ref)

  props = {
    ...props,
    ref: setRef,
    autoCorrect: 'off',
    spellCheck: false,
  } as TextareaCoreProps

  const resize = () => {
    const node = textarea.current

    if (!node) return

    // Placeholder создает скрол когда не помещается, поэтому когда текста в нем очень много, высота высчиывается исходя из количества строк placeholder
    // То есть при первоначальном вводе текста текстовое поле сожмется до минимальной ширины
    const { placeholder, value } = node

    if (value) {
      node.style.height = 'auto'
      node.style.height = `${node.scrollHeight}px`
    } else {
      node.placeholder = ''
      node.style.height = 'auto'
      node.style.height = `${node.scrollHeight}px`
      node.placeholder = placeholder
    }
  }

  const preventClick = invokeAll((event) => {
    if (event.detail === 0) event.stopPropagation()
  }, props.onClick)

  useLayoutEffect(() => {
    const node = textarea.current
    if (!node) return

    node.style.resize = resizable ? 'auto' : 'none'

    if (maxRows) {
      const { lineHeight, paddingTop, paddingBottom, borderTopWidth, borderBottomWidth } = window.getComputedStyle(node)

      node.style.maxHeight = `calc(${maxRows} * ${lineHeight} + ${paddingTop} + ${paddingBottom} + ${borderTopWidth} + ${borderBottomWidth})`
    }
  }, [maxRows, resizable])

  useEffect(() => {
    autoSize && resize()
  }, [autoSize, props.value])

  return (
    <textarea css={textareaStyle} {...filterProps(props)} onClick={preventClick} />
  )
}))

TextareaCore.displayName = 'TextareaCore'
