import React, { useEffect, useState } from 'react'
import { css } from '@emotion/core'
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
    adjacentSelector: 'input',
    shape: props.shape,
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
    }
    ${textRules}
  `)
)

const textStyle = css`
  display: inline-flex;
  flex-direction: column;
`

const Toggle = ({ className, children, ...props }: ToggleProps) => {
  const theme = useTheme()
  const [press, setPress] = useState(false)

  props = {
    labelPosition: 'end',
    onChange: () => {},
    ...props,
  }

  const [ref, setRef] = useRefHook(props.innerRef)
  const groupProps = useGroupHook(ref, props)

  if (groupProps && 'onClick' in groupProps) {
    props = {
      ...props,
      ...groupProps,
      onChange: () => {},
    }
  }

  useEffect(() => {
    if (props.indeterminate !== undefined && ref.current) {
      ref.current.indeterminate = props.indeterminate
    }
  }, [props.indeterminate])
  
  const state = props.indeterminate ? 'mixed' as const : Boolean(props.checked)

  const aria = {
    role: groupProps && groupProps.role,
    'aria-checked': state,
    'aria-invalid': props.variant === 'error',
    'aria-disabled': props.disabled,
  }

  // Prevent focused state lost
  const onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    setPress(true)
    event.preventDefault()
  }

  const onMouseUp = (event: React.MouseEvent<HTMLElement>) => {
    setPress(false)
  }

  const override = foldThemeParams(theme[props.scheme!], props)
  const { Toggle, Switch, Label, Description } = foldThemeParams(theme.toggle, props)
  const toggleStyle = toggleClassName(props, theme, Toggle.style)
  const switchStyle = switchClassName(props, theme, {...Switch.style, ...override.Switch.style })

  const label = props.label && <Text {...Label.props} crop >{props.label}</Text>
  const description = props.description && <Text {...Description.props} crop>{props.description}</Text>

  return (
    <label css={toggleStyle}>
      {props.labelPosition === 'start' && label}
      <input {...filterProps(props)} ref={setRef} type={props.mode} aria-checked={state} />
      <div css={switchStyle} className={className} {...aria} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
        {children && children({state, press, loading: props.loading})}
      </div>
      {props.labelPosition === 'end' && (
        <div css={textStyle} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
          {label}
          {description}
        </div>
      )}
    </label>
  )
}

export default Toggle