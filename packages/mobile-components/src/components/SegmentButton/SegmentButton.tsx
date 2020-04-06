import React, { useEffect, useState } from 'react'
import { filterProps } from '@avito/core/utils/'
import { useRefHook } from '@avito/core/hooks/'
import { mergeTheme, useTheme } from '@avito/core/theme/'
import { useWindowSize } from '@avito/core/hooks/'
import { foldThemeParams, createClassName } from '@avito/core/styled-system/'
import { SegmentButtonProps } from './contract'
import { segmentButtonTheme } from './theme'

const groupClassName = createClassName<SegmentButtonProps, typeof segmentButtonTheme>(
  (themeStyle, props) => ({
    display: 'flex',
    width: 1,
    shrink: false,
    ...themeStyle,
    ...props,
  }),
  (textRules) => (`
    position: relative;

    ${textRules}
  `)
)

const buttonClassName = createClassName<SegmentButtonProps, typeof segmentButtonTheme>(
  (themeStyle) => ({
    display: 'inline-block',
    position: 'relative',
    grow: true,
    height: 1,
    ...themeStyle,
  }),
  (textRules) => (`
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
  `)
)

const slideClassName = createClassName<SegmentButtonProps, typeof segmentButtonTheme>(
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

const SegmentButton = ({ options, name, override, onChange, ...props }: SegmentButtonProps) => {
  const theme = useTheme()
  const componentTheme = mergeTheme(segmentButtonTheme, theme.SegmentButton, override)
  const windowSize = useWindowSize()

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

  const { Group, Button, Slide } = foldThemeParams(props, componentTheme)
  const groupStyle = groupClassName(props, theme, Group.style)
  const buttonStyle = buttonClassName(props, theme, Button.style)
  const slideStyle = slideClassName(props, theme, Slide.style)

  const onClick = (value: SegmentButtonProps['value']) => {
    if (value === props.value) return

    onChange && onChange({ name, value })
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
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

export default SegmentButton
