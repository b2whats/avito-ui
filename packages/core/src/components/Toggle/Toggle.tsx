import React, { useEffect, useState } from 'react'
import { usePrevent3DTouch } from '../../hooks/'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { uiComponent } from '../../theme/'
import { filterProps, invokeAll, withMarker } from '../../utils/'
import { useGroupHook } from '../Layout/'
import { Text } from '../Text/'
import { ToggleProps } from './contract'
import { toggleTheme } from './theme'

const toggleClassName = createClassName<ToggleProps, typeof toggleTheme>({
  display: 'inline-flex',
  mapPropsToStyle: true,
  cssRewrite: (textRules) => (`
    position: relative;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout: none;

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
  `),
})

const switchClassName = createClassName<ToggleProps, typeof toggleTheme>({
  display: 'inline-flex',
  cssRewrite: (textRules) => (`
    transition: background-color 0.2s ease 0s;

    &::before {
      content: 'x';
      width: 0px;
      overflow: hidden;
      align-self: center;
      color: transparent;
    }

    ${textRules}
  `),
})

export const Toggle = uiComponent('Toggle', toggleTheme)<ToggleProps, HTMLInputElement>((
  { className, children, ...props },
  { theme, tokens, ref }
) => {
  const groupProps = useGroupHook(ref, props)
  const [testId] = withMarker(groupProps.marker)

  // Uncontrolled input for demos
  if (tokens._demo && !groupProps.onChange && groupProps.mode === 'checkbox') {
    const [checked, onChange] = useState<boolean | undefined>(groupProps.checked || false)
    groupProps.checked = checked
    groupProps.onChange = event => onChange(event.checked)
  }

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

  const preventLabelClick = invokeAll((event: React.SyntheticEvent) => event.stopPropagation(), groupProps.onClick)

  const onChange = () => {
    const value = {
      name: groupProps.name,
      value: groupProps.value,
      checked: !groupProps.checked,
      type: aria.role,
    }

    groupProps.onChange && groupProps.onChange(value)
  }

  const { Toggle, Switch, Icon, Label } = foldThemeParams(groupProps, theme)
  const toggleStyle = toggleClassName(groupProps, tokens, Toggle)
  const switchStyle = switchClassName(groupProps, tokens, Switch)
  const label = props.label && <Text {...Label} crop>{props.label}</Text>

  return (
    <Slot name='Toggle' ref={usePrevent3DTouch()} css={toggleStyle} {...aria} onMouseDown={preventFocus} {...testId(props.value)}>
      {props.labelPosition === 'start' && label}
      <input
        {...filterProps(groupProps)}
        type={props.mode}
        onChange={onChange}
        onClick={preventLabelClick}
        {...testId('toggle', props.value)} />
      <div css={switchStyle} className={className}>
        {children && children({ checked, loading: props.loading, Icon })}
      </div>
      {props.labelPosition === 'end' && label}
    </label>
  )
})
