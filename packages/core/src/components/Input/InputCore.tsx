import React from 'react'
import { css, keyframes } from '../../styled-system/'
import { filterProps, invokeAll } from '../../utils/'
import { InputCoreProps } from './contract'

const autofill = keyframes`
  100% {
    background: transparent;
    color: inherit;
  }
`

// @-moz-document url-prefix() - стили только дла FF
const inputField = css`
  width: 100%;
  height: 100%;
  flex-shrink: 1;
  display: inline-block;
  position: relative;
  visibility: hidden;
  min-width: 5px;

  &[data-value] {
    width: auto;
  }

  &[data-value]::before {
    content: attr(data-value);
    display: inline-block;
    white-space: pre;
    padding-right: 2px;
  }

  @-moz-document url-prefix() {
    & > input {
      height: 100%;
    }
  }

  & > input {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    bottom: 0;
    padding: 0px;
    margin: 0px;
    border-width: 0;
    visibility: visible;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    outline: none;
    background-color: transparent;
    -webkit-text-fill-color: currentcolor;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    text-overflow: ellipsis;
    overflow: hidden;
  }

  & > [disabled] {
    cursor: inherit;
  }

  & > ::-webkit-inner-spin-button {
    display: none
  }
  & > [type=number] {
    -moz-appearance: textfield;
  }

  & > input:-webkit-autofill,
  & > input:-webkit-autofill:hover,
  & > input:-webkit-autofill:focus,
  & > input:-webkit-autofill:active {
    animation: ${autofill} 0s forwards;
  }

  & > input::-ms-clear,
  & > input::-ms-reveal {
    display: none;
  }
`

export const InputCore = React.forwardRef((props: InputCoreProps, ref: React.Ref<HTMLInputElement>) => {
  props = {
    type: 'text',
    autoCorrect: 'off',
    spellCheck: false,
    ...props,
    ref,
  } as InputCoreProps

  // Прерываем всплытие события click вызванное триггером label, без отмены событие клика будет вызвано дважды
  // Когда мы триггерим клик по инпуту через лейбл в свойстве detail будет значение 0, так как клик был програмный
  const preventClick = invokeAll((event) => {
    if (event.detail === 0) event.stopPropagation()
  }, props.onClick)

  const text = props.autoSize ? props.value || props.placeholder || '' : undefined

  return (
    <div css={inputField} data-value={text}>
      <input {...filterProps(props)} onClick={preventClick} />
    </div>
  )
})

InputCore.displayName = 'InputCore'
