import React, { useEffect, useState, useCallback } from 'react'
import { filterProps, uiComponent, useWindowSize, foldThemeParams, createClassName } from '@avito/core'
import { SegmentButtonProps } from './contract'
import { segmentButtonTheme } from './theme'

const groupClassName = createClassName<SegmentButtonProps, typeof segmentButtonTheme>({
  display: 'flex',
  mapPropsToStyle: true,
  cssRewrite: (textRules) => (`
    position: relative;
    ${textRules}
  `),
})

const buttonClassName = createClassName<SegmentButtonProps, typeof segmentButtonTheme>({
  display: 'inline-block',
  cssRewrite: (textRules) => (`
    padding: 0px;
    margin: 0px;
    border: 0px;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    outline: 0;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0);

    &::-moz-focus-inner {
      border: 0;
    }

    ${textRules}
  `),
})

const slideClassName = createClassName<SegmentButtonProps, typeof segmentButtonTheme>({
  display: 'inline-block',
  cssRewrite: (textRules) => `
    position: absolute;
    left: 0;
    transition: transform .2s ease-in;
    ${textRules}
  `,
})

type Geometry = {
  [key in string]: { transform: string, width: number, height: number }
}

export const SegmentButton = uiComponent('SegmentButton', segmentButtonTheme)((
  { options, name, onChange, ...props }: SegmentButtonProps,
  { theme, tokens, testId, ref }
) => {
  props.value = !props.value && options && options.length > 0 ? options[0].value : props.value
  const windowSize = useWindowSize()
  const [geometry, setGeometry] = useState<Geometry>({})

  useEffect(() => {
    if (!ref.current) return

    const geometry: Geometry = {}
    const buttons = ref.current.querySelectorAll('[type=button]') as NodeListOf<HTMLButtonElement>

    buttons.forEach(node => {
      geometry[node.value] = {
        transform: `translateX(${node.offsetLeft}px)`,
        width: node.offsetWidth,
        height: node.offsetHeight,
      }
    })

    setGeometry(geometry)
  }, [windowSize.innerWidth])

  const { Group, Button, Slide } = foldThemeParams(props, theme)
  const groupStyle = groupClassName(props, tokens, Group)
  const buttonStyle = buttonClassName(props, tokens, Button)
  const slideStyle = slideClassName(props, tokens, Slide)

  const onClick = (value: SegmentButtonProps['value']) => {
    if (value === props.value) return

    onChange && onChange({ name, value })
  }

  const onKeyDown = useCallback((event: React.KeyboardEvent<HTMLButtonElement>) => {
    let next: HTMLButtonElement | null = event.currentTarget
    let exit = ref.current!.children.length

    do {
      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          event.preventDefault()
          next = (next.nextElementSibling || ref.current!.firstChild) as HTMLButtonElement
          break
        case 'ArrowUp':
        case 'ArrowLeft':
          event.preventDefault()
          next = (next.previousElementSibling || ref.current!.lastChild) as HTMLButtonElement
          break
      }

    } while (next && (next.disabled || next.type !== 'button') && exit--)

    if (next) {
      next.focus()
      next.click()
    }
  }, [])

  return (
    <div css={groupStyle} role='radiogroup' {...filterProps(props)} {...testId()}>
      {geometry[props.value!] && <div css={slideStyle} style={geometry[props.value!]} />}
      {options && options.map(item => {
        const checked = item.value === props.value

        return (
          <button
            key={item.value}
            css={buttonStyle}
            type='button'
            value={item.value}
            onClick={() => onClick(item.value)}
            onKeyDown={onKeyDown}
            role='radio'
            aria-checked={checked}
            disabled={props.disabled || item.disabled}
            tabIndex={checked ? 0 : -1}
            {...testId('button', item.value)}
          >
            {item.text}
          </button>
        )
      })}
    </div>
  )
})
