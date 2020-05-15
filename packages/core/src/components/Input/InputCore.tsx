import React from 'react'
import { css, keyframes, createClassName } from '../../styled-system/'
import { filterProps } from '../../utils/'
import { InputCoreProps } from './contract'
import { useTheme } from '@avito/core'

const autofill = keyframes`
  100% {
    background: transparent;
    color: inherit;
  }
`

const rootClassName = css`
  width: 100%;
  height: 100%;
  flex-shrink: 1;
  display: inline-block;
  position: relative;
  visibility: hidden;
  min-width: 5px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &[data-value] {
    width: auto;
  }

  &[data-value]::before {
    content: attr(data-value);
    display: inline-block;
    white-space: pre;
    padding-right: 2px;
  }
`

const inputClassName = createClassName<InputCoreProps, {}>(
  (themeStyle, props) => ({
    display: 'inline-block',
    m: 0,
    borderWidth: 0,
    bg: 'transparent',
    p: 0,
    ...props,
  }),
  (textRules) => (css`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    visibility: visible;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: normal;
    color: inherit;
    outline: none;
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

    ${textRules}
  `)
)


export const InputCore = React.forwardRef((props: InputCoreProps, ref: React.Ref<HTMLInputElement>) => {
  props = {
    type: 'text',
    autoCorrect: 'off',
    spellCheck: false,
    ...props,
    ref,
  } as InputCoreProps
  const theme = useTheme()

  // Прерываем всплытие события click вызванное триггером label, без отмены событие клика будет вызвано дважды
  // Когда мы триггерим клик по инпуту через лейбл в свойстве detail будет значение 0, так как клик был програмный
  const preventClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (event.detail === 0) event.stopPropagation()

    props.onClick && props.onClick(event)
  }

  const text = props.autoSize ? props.value || props.placeholder : undefined

  return (
    <div css={rootClassName} data-value={text}>
      <input
        {...filterProps(props)}
        css={inputClassName(props, theme, {} as never)}
        onClick={preventClick} />
    </div>
  )
})

InputCore.displayName = 'InputCore'