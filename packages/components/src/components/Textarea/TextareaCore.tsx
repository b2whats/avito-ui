import React, { useEffect } from 'react'
import { css } from '@emotion/core'
import { filterProps, useRefHook } from '../../utils'
import { TextareaCoreProps } from './contract'

const textareaStyle = css`
  box-sizing: border-box;
  width: 100%;
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &[disabled] {
    cursor: inherit;
  }
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

  // Если перенести эту логику в useEffect хук, будет наблюдаться неприятное подрагивание текста
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    autoSize && resize()
    props.onChange && props.onChange(event)
  }

  useEffect(() => {
    const node = ref.current

    if (node) {
      const { lineHeight, paddingTop, paddingBottom, borderTopWidth, borderBottomWidth } = window.getComputedStyle(node)

      node.style.maxHeight = `calc(${maxRows} * ${lineHeight} + ${paddingTop} + ${paddingBottom} + ${borderTopWidth} + ${borderBottomWidth})`
      node.style.resize = resizable ? 'auto' : 'none'
    }

    autoSize && resize()
  }, [maxRows, resizable])

  return (
    <textarea css={textareaStyle} {...filterProps(props)} onChange={onChange} ref={setRef} autoCorrect='off' spellCheck={false} />
  )
}

export default TextareaCore