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
  flex-shrink: 1;
  display: inline-block;
  position: relative;
  visibility: hidden;
  min-width: 5px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &::before {
    content: attr(data-value);
    display: inline-block;
    white-space: pre;
    padding-right: 2px;
  }
`

const inputStyle = css`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &[disabled] {
    cursor: inherit;
  }

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

export const InputCore: React.RefForwardingComponent<
  React.Ref<HTMLInputElement>,
  InputCoreProps
> = React.forwardRef(({ ...props }: InputCoreProps, ref) => {
  return (
    <div css={inputField(props.autoSize)} data-value={props.value || props.placeholder}>
      <input {...filterProps(props)} ref={ref} css={inputStyle} autoCorrect='off' spellCheck={false}/>
    </div>
  )
})

InputCore.displayName = 'InputCore'

export default InputCore