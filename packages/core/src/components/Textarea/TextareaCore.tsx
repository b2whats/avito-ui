import React from 'react'
import { useIsomorphicLayoutEffect } from '../../hooks/'
import { css } from '../../styled-system/'
import { uiComponent } from '../../theme'
import { filterProps, invokeAll } from '../../utils/'
import { TextareaCoreProps } from './contract'

const textareaStyle = css`
  resize: none;
  box-sizing: border-box;
  overflow-y: hidden;
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

export const TextareaCore = uiComponent('TextareaCore', {})<TextareaCoreProps, HTMLTextAreaElement>((
  { rows = 2, maxRows, autoSize, resizable, ...props },
  { ref }
) => {
  props = {
    ...props,
    autoCorrect: 'off',
    spellCheck: false,
  } as typeof props

  const resize = () => {
    const node = ref.current

    if (!node) return

    // Placeholder создает скрол когда не помещается, поэтому когда текста в нем очень много, высота высчиывается исходя из количества строк placeholder
    // То есть при первоначальном вводе текста текстовое поле сожмется до минимальной ширины
    const { placeholder } = node

    node.placeholder = ''
    node.style.height = 'auto'
    node.style.height = node.scrollHeight + 'px'
    node.placeholder = placeholder
    node.style.overflowY = node.scrollHeight >= parseInt(node.style.maxHeight) ? 'auto' : 'hidden'
  }

  const preventClick = invokeAll((event) => {
    if (event.detail === 0) event.stopPropagation()
  }, props.onClick)

  useIsomorphicLayoutEffect(() => {
    const node = ref.current
    if (!node) return

    node.style.resize = resizable ? 'auto' : 'none'
    const { lineHeight } = window.getComputedStyle(node)

    node.style.minHeight = rows * parseInt(lineHeight) + 'px'

    if (maxRows) {
      node.style.maxHeight = maxRows * parseInt(lineHeight) + 'px'
    }
  }, [rows, maxRows, resizable])

  useIsomorphicLayoutEffect(() => {
    autoSize && resize()
  }, [autoSize, props.value])

  return (
    <textarea css={textareaStyle} {...filterProps(props)} rows={rows} onClick={preventClick} />
  )
})
