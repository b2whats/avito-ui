import React, { useEffect } from 'react'
import { css } from '@emotion/core'
import { filterProps, useRefHook } from '../../utils'
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &[disabled] {
    cursor: inherit;
  }
`

type TextareaCore = React.RefForwardingComponent<React.Ref<HTMLElement>, TextareaCoreProps>

export const TextareaCore: TextareaCore = React.forwardRef(({ maxRows, autoSize, resizable, ...props }: TextareaCoreProps, ref) => {
  const [textarea, setRef] = useRefHook<HTMLTextAreaElement>(ref)

  const resize = () => {
    const node = textarea.current

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

  const preventClick = (event: React.MouseEvent<HTMLTextAreaElement>) => {
    event.stopPropagation()
  }

  useEffect(() => {
    const node = textarea.current

    if (node) {
      const { lineHeight, paddingTop, paddingBottom, borderTopWidth, borderBottomWidth } = window.getComputedStyle(node)

      node.style.maxHeight = `calc(${maxRows} * ${lineHeight} + ${paddingTop} + ${paddingBottom} + ${borderTopWidth} + ${borderBottomWidth})`
      node.style.resize = resizable ? 'auto' : 'none'
    }

    autoSize && resize()
  }, [maxRows, resizable])

  return (
    <textarea css={textareaStyle} {...filterProps(props)} onMouseDown={preventClick} onChange={onChange} ref={setRef} autoCorrect='off' spellCheck={false} />
  )
})

TextareaCore.displayName = 'TextareaCore'

export default TextareaCore