import React, { useEffect, useState } from 'react'
import { useTheme, useRefHook, filterProps } from '../../utils'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { SegmentButtonProps } from './contract'
import { SegmentButtonTheme } from './theme'

const groupClassName = createClassName<SegmentButtonProps, SegmentButtonTheme>(
  (themeStyle, props) => ({
    display: 'flex',
    width: 1,
    ...themeStyle,
    ...props,
  }),
  (textRules) => (`
    box-sizing: border-box;
    position: relative;
    flex-shrink: 0;

    ${textRules}
  `)
)

const buttonClassName = createClassName<SegmentButtonProps, SegmentButtonTheme>(
  (themeStyle) => ({
    display: 'inline-block',
    grow: true,
    height: 1,
    ...themeStyle,
  }),
  (textRules) => (`
    box-sizing: border-box;
    position: relative;
    border: 0px;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    outline: 0;
    cursor: pointer;
    
    &::-moz-focus-inner {
      border: 0;
    }

    ${textRules}
  `)
)

const slideClassName = createClassName<SegmentButtonProps, SegmentButtonTheme>(
  (themeStyle) => ({
    display: 'inline-block',
    height: 1,
    ...themeStyle,
  }),
  (textRules) => `
    position: absolute;
    left: 0;
    transition: transform .2s ease-in;
    ${textRules}
  `
)

const Button = ({ options, name, onChange, ...props }: SegmentButtonProps) => {
  const theme = useTheme()

  props = {
    size: 'm',
    ...props,
    value: !props.value && options && options.length > 0 ? options[0].value : props.value,
  }

  const [ref, setRef] = useRefHook<HTMLElement>()
  type Geometry = {
    [key in string]: { transform: string, width: number, height: number }
  }
  const [geometry, setGeometry] = useState<Geometry>({})

  useEffect(() => {
    if (!ref.current) return

    const dimension: any = {}
    const buttons = ref.current.querySelectorAll('[type=button]') as NodeListOf<HTMLButtonElement>

    buttons.forEach(node => {
      dimension[node.value] = {
        transform: `translateX(${node.offsetLeft}px)`,
        width: node.offsetWidth,
        height: node.offsetHeight,
      }
    })

    setGeometry(dimension)
  }, [])

  const { Group, Button, Slide } = foldThemeParams(theme.segmentButton, props)
  const groupStyle = groupClassName(props, theme, Group.style)
  const buttonStyle = buttonClassName(props, theme, Button.style)
  const slideStyle = slideClassName(props, theme, Slide.style)

  const onClick = (value: SegmentButtonProps['value']) => {
    if (value === props.value) return

    onChange && onChange({ name, value })
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    let next: HTMLButtonElement | null = event.currentTarget
    let exit = 20

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

    } while (next && (next.disabled || next.type !== 'button') && exit)

    if (next) {
      next.focus()
      next.click()
    }
  }

  return (
    <div ref={setRef} css={groupStyle} role='radiogroup' {...filterProps(props)}>
      <div css={slideStyle} style={geometry[props.value!]} />
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
            aria-checked={checked}
            disabled={props.disabled || item.disabled}
            tabIndex={checked ? 0 : -1}
          >
            {item.text}
          </button>
        )
      })}
    </div>
  )
}

export default Button
