import React, { useRef, useEffect, useCallback } from 'react'
import { styled, useTheme } from '../../../packages/components/src/utils'
import { focusProp, space } from '../../../packages/components/src/styled-system'
import { ToggleProps } from './contract'
import { Text } from '../Text'
import { Variants } from '../Variants'

type BoxProps = Pick<ToggleProps, 'labelPosition'>

const ToggleBox = styled('label')<BoxProps>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: baseline;
  cursor: pointer;

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

  ${({ labelPosition }) => `
    flex-direction: ${labelPosition === 'start' ? 'row-reverse' : 'row'};

    && > .Text {
      ${labelPosition === 'start' ? 'margin-left: 0;' : 'margin-right: 0;'}
    }
  `}

  ${space}
`

type SwitchProps = Pick<ToggleProps, 'size' | 'variant' | 'className'>

const Switch = styled(Variants)<SwitchProps>`
  box-sizing: border-box;
  user-select: none;
  flex-shrink: 0;
  vertical-align: middle;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: 'x';
    width: 0px;
    overflow: hidden;
  }

  &[aria-disabled='true'] {
    cursor: default;
  }

  & > svg {
    pointer-events: none;
  }

  ${({ size, theme: { toggle } }) => `
    font-size: ${toggle[`size_${size}`]};
  `}

  input:focus + & {
    ${focusProp}
  }
`

const Toggle = ({ labelPosition, mode, size, variant, label, children, indeterminate, className, ...props }: ToggleProps) => {
  const theme = useTheme()

  const { preset: {
    size : { [size]: presetSize },
    variants: presetVariants,
  } } = theme.toggle

  const targetRef = useRef<HTMLInputElement | null>(null)
  const setRef = useCallback(node => {
    targetRef.current = node

    if (props.innerRef) {
      props.innerRef(node)
    }
  }, [])

  // Необходимо что бы фокус не моргал при неоднократных нажатиях на элемент
  const onMouseDown = useCallback(event => {
    event.stopPropagation()
    event.preventDefault()
  }, [])

  useEffect(() => {
    if (indeterminate !== undefined && targetRef.current) {
      targetRef.current.indeterminate = indeterminate
    }

  }, [indeterminate])
  
  const state = indeterminate && !props.checked ? 'mixed' as const : Boolean(props.checked)
  const switchProps = {
    ...presetVariants.Switch,
    className,
    size,
    variant,
    'aria-checked': state,
    'aria-invalid': variant === 'error',
    'aria-disabled': props.disabled,
    onMouseDown,
  }

  return (
    <ToggleBox labelPosition={labelPosition}>
      <input {...props} ref={setRef} type={mode} />
      <Switch {...switchProps}>
        {children && children(state)}
      </Switch>
      { label && <Text {...presetSize.Text} as='span'>{label}</Text> }
    </ToggleBox>
  )
}

Toggle.defaultProps = {
  size: 'm',
  variant: 'primary',
}

export default Toggle