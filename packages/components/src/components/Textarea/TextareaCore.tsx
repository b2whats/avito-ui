import React, { useEffect, useRef } from 'react'
import { css } from '@emotion/core'
import { filterProps, useRefHook } from '../../utils'
import { TextareaCoreProps } from './contract'

const textareaStyle = css`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  border-width: 0;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
  -webkit-text-fill-color: currentcolor;
  color: inherit;
  outline: none;
  background-color: transparent;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
`

const TextareaCore = ({ innerRef, maxRows, autoSize, resizable, ...props }: TextareaCoreProps) => {
  const [ref, setRef] = useRefHook<HTMLTextAreaElement>(innerRef)

  const resize = () => {
    const node = ref.current

    if (!node) return

    // Placeholder создает скрол когда не помещается, запоминаем его значение, удаляем и возвращаем после рассчета высоты
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

  useEffect(() => {
    const node = ref.current

    if (node) {
      const { lineHeight, paddingTop, paddingBottom, borderTopWidth, borderBottomWidth } = window.getComputedStyle(node)

      node.style.maxHeight = `calc(${maxRows} * ${lineHeight} + ${paddingTop} + ${paddingBottom} + ${borderTopWidth} + ${borderBottomWidth})`
      node.style.resize = resizable ? 'auto' : 'none'
    }
  }, [maxRows, resizable])

  useEffect(() => {
    autoSize && resize()
  })

  return (
    <textarea css={textareaStyle} {...filterProps(props)} ref={setRef} autoCorrect='off' spellCheck={false} />
  )
}

export default TextareaCore