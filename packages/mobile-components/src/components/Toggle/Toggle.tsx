import React, { useEffect } from 'react'
import { useThemeMemo } from '../../theme/'
import { filterProps } from '../../utils'
import { useRefHook, usePrevent3DTouch } from '../../hooks'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { ToggleProps } from './contract'
import { createToggleTheme, ToggleTheme } from './theme'
import { useGroupHook } from '../Layout'
import { Text } from '../Text'

const toggleClassName = createClassName<ToggleProps, ToggleTheme>(
  (_, props) => ({
    display: 'inline-flex',
    valign: 'baseline',
    ...props,
    shape: undefined,
  }),
  (textRules) => (`
    position: relative;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-touch-callout: none;
    -webkit-user-select: none;

    & > input {
      clip: rect(0, 0, 0, 0);
      height: 1px;
      position: absolute;
      white-space: nowrap;
      width: 1px;
      margin: -1px;
      border-width: 0;
      border-style: initial;
      border-color: initial;
      border-image: initial;
      overflow: hidden;
      padding: 0;
    }

    &[aria-disabled] {
      pointer-events: none;
    }

    ${textRules}
  `)
)

const switchClassName = createClassName<ToggleProps, ToggleTheme>(
  (themeStyle, props) => ({
    display: 'inline-flex',
    shrink: false,
    shape: props.shape,
    adjacentSelector: 'input',
    ...themeStyle,
  }),
  (textRules) => (`
    transition: background-color 0.2s ease 0s;
    -webkit-user-select: none;
  
    &::before {
      content: 'x';
      width: 0px;
      overflow: hidden;
      align-self: center;
      color: transparent;
    }

    ${textRules}
  `)
)

const Toggle = ({ className, children, override, ...props }: ToggleProps) => {
  const [theme, toggleTheme] = useThemeMemo(createToggleTheme, override)
  const setTouchRef = usePrevent3DTouch()

  props = {
    labelPosition: 'end',
    ...props,
  }

  const [ref, setRef] = useRefHook<HTMLInputElement>()
  const groupProps = useGroupHook(ref, props)

  useEffect(() => {
    if (props.indeterminate !== undefined && ref.current) {
      ref.current.indeterminate = props.indeterminate
    }
  }, [props.indeterminate])
  
  const checked = groupProps.indeterminate ? 'mixed' as const : Boolean(groupProps.checked)

  const aria = {
    role: groupProps.role || groupProps.mode,
    'aria-checked': checked,
    'aria-invalid': groupProps.variant === 'error',
    'aria-disabled': groupProps.disabled,
    'aria-busy': groupProps.loading,
  }

  const preventFocus = (event: React.MouseEvent<Element> | React.TouchEvent<Element>) => {
    event.preventDefault()
  }

  const preventLabelClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation()

    props.onClick && props.onClick(event)
  }

  const onChange = () => {
    const value = {
      name: groupProps.name,
      value: groupProps.value,
      checked: !groupProps.checked,
      type: aria.role,
    }

    props.onChange && props.onChange(value)
  }

  const { Toggle, Switch, Label } = foldThemeParams(groupProps, toggleTheme)
  const toggleStyle = toggleClassName(groupProps, theme, Toggle.style)
  const switchStyle = switchClassName(groupProps, theme, Switch.style)
  const label = props.label && <Text {...Label.props} crop>{props.label}</Text>

  return (
    <label ref={setTouchRef} css={toggleStyle} {...aria} onMouseDown={preventFocus} >
      {props.labelPosition === 'start' && label}
      <input {...filterProps(groupProps)} ref={setRef} type={props.mode} onChange={onChange} onClick={preventLabelClick}/>
      <div css={switchStyle} className={className}>
        {children && children({ checked, loading: props.loading })}
      </div>
      {props.labelPosition === 'end' && label}
    </label>
  )
}

export default Toggle