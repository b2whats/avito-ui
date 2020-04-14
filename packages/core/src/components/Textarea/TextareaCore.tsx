import React, { useEffect } from 'react'
import { css } from '../../styled-system/'
import { filterProps } from '../../utils/'
import { useRefHook } from '../../hooks/'
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

export const TextareaCore = React.forwardRef(({ maxRows, autoSize, resizable, ...props }: TextareaCoreProps, ref: React.Ref<HTMLTextAreaElement>) => {
  const [textarea, setRef] = useRefHook(ref)

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
  }, [maxRows, resizable])

  useEffect(() => {
    autoSize && resize()
  })

  return (
    <textarea css={textareaStyle} {...filterProps(props)} onMouseDown={preventClick}  ref={setRef} autoCorrect='off' spellCheck={false} />
  )
})

TextareaCore.displayName = 'TextareaCore'

export default TextareaCore