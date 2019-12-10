import React from 'react'
import { css, keyframes } from '@emotion/core'
import { filterProps } from '../../utils'
import { InputCoreProps } from './contract'

const autofill = keyframes`
  100% {
    background: transparent;
    color: inherit;
  }
`

const inputField = (autoSize?: boolean) => css`
  width: ${autoSize ? 'auto' : '100%'};
  display: inline-block;
  position: relative;
  visibility: hidden;
  min-width: 5px;
  &::before {
    content: attr(data-value);
    display: inline-block;
    white-space: pre;
  }
`

const inputStyle = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 0px;
  margin: 0px;
  border-width: 0;
  visibility: visible;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
  -webkit-text-fill-color: currentcolor;
  color: inherit;
  outline: none;
  background-color: transparent;
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    animation: ${autofill} 0s forwards;
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none;
  }
`

const InputCore = ({ innerRef, ...props }: InputCoreProps) => {
  return (
    <div css={inputField(props.autoSize)} data-value={props.value || props.placeholder}>
      <input {...filterProps(props)} ref={innerRef} css={inputStyle} size={1} autoCorrect='off' spellCheck={false}/>
    </div>
  )
}

export default InputCore