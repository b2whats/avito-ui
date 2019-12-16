import React, { useEffect, useState } from 'react'
import { css } from '@emotion/core'
import deepmerge from 'deepmerge'
import memoize from 'fast-memoize'
import { filterProps, useRefHook, useTheme } from '../../utils'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { ToggleProps } from './contract'
import { ToggleTheme } from './theme'
import { useGroupHook } from '../Layout/'
import { Text } from '../Text/'

const toggleClassName = createClassName<ToggleProps, ToggleTheme>(
  (_, props) => ({
    display: 'inline-flex',
    valign: 'baseline',
    ...props,
    shape: undefined,
  }),
  (textRules, { disabled }) => (`
    box-sizing: border-box;
    position: relative;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

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

    cursor: ${disabled ? 'default' : 'pointer'};
    pointer-events: ${disabled ? 'none' : 'all'};

    ${textRules}
  `)
)

const switchClassName = createClassName<ToggleProps, ToggleTheme>(
  (themeStyle, props) => ({
    display: 'inline-flex',
    shape: props.shape,
    adjacentSelector: 'input',
    ...themeStyle,
  }),
  (textRules) => (`
    transition: background-color 0.2s ease 0s;
    box-sizing: border-box;
    user-select: none;
    flex-shrink: 0;
  
    &::before {
      content: 'x';
      width: 0px;
      overflow: hidden;
      align-self: center;
    }
    ${textRules}
  `)
)

const mergeTheme = memoize((target, reference) => deepmerge(target, reference))

const Toggle = ({ className, children, ...props }: ToggleProps) => {
  const theme = useTheme()
  const toggleTheme = props.override
    ? mergeTheme(theme.toggle, props.override) as typeof theme.toggle
    : theme.toggle
  const [active, setActive] = useState(false)

  props = {
    labelPosition: 'end',
    ...props,
  }

  const [ref, setRef] = useRefHook(props.innerRef)
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
  }

  // Prevent focused state lost
  const onMouseDown = (event: React.MouseEvent<Element> | React.TouchEvent<Element>) => {
    setActive(true)
    event.preventDefault()
  }

  const onMouseUp = () => {
    setActive(false)
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

  const { Toggle, Switch, Label } = foldThemeParams(toggleTheme, groupProps)
  const toggleStyle = toggleClassName(groupProps, theme, Toggle.style)
  const switchStyle = switchClassName(groupProps, theme, Switch.style)

  const label = props.label && <Text {...Label.props} crop >{props.label}</Text>

  const toggleHanflers = {
    onMouseDown,
    onMouseUp,
    onTouchStart: onMouseDown,
    onTouchEnd: onMouseUp,
  }

  return (
    <label css={toggleStyle} {...aria} {...toggleHanflers}>
      {props.labelPosition === 'start' && label}
      <input {...filterProps(groupProps)} ref={setRef} type={props.mode} onChange={onChange}/>
      <div css={switchStyle} className={className} >
        {children && children({ checked, active, loading: props.loading })}
      </div>
      {props.labelPosition === 'end' && label}
    </label>
  )
}

export default Toggle