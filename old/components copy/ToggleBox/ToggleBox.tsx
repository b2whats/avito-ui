import React, { useEffect } from 'react'
import { styled, useTheme, omit, useRefHook, foldPreset } from '../../../packages/components/src/utils'
import { space } from '../../../packages/components/src/styled-system'
import { ToggleBoxProps } from './contract'
import { useGroupHook } from '../../../packages/components/src/components/Layout/Group'
import { Text } from '../Text'
import { Variants } from '../Variants'

type BoxProps = Omit<ToggleBoxProps, 'onClick' | 'onChange' | 'onFocus' | 'onBlur' | 'onKeyDown' | 'size' | 'mode' | 'variant' | 'children'>

const Container = styled('label', {
  shouldForwardProp: prop => prop === 'children',
})<BoxProps>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: baseline;

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

  ${({ labelPosition, disabled }) => `
    flex-direction: ${labelPosition === 'start' ? 'row-reverse' : 'row'};

    cursor: ${disabled ? 'default' : 'pointer'};
    pointer-events: ${disabled ? 'none' : 'all'};
  `}

  ${space}
`

type SwitchProps = Pick<ToggleBoxProps, 'size' | 'variant' | 'className'>

const Switch = styled(Variants)<SwitchProps>`
  user-select: none;
  flex-shrink: 0;
  vertical-align: middle;
  padding: 1px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: 'x';
    width: 0px;
    overflow: hidden;
  }
`

const ToggleBox = ({ labelPosition, mode, size, variant, label, children, indeterminate, className, kind, ...props }: ToggleBoxProps) => {
  const theme = useTheme()

  const [ref, setRef] = useRefHook<HTMLInputElement>(props.innerRef)
  const groupProps = useGroupHook(ref, props)

  if ('onClick' in groupProps) {
    props.checked = groupProps['aria-checked']
    props.onKeyDown = groupProps.onKeyDown
    props.onClick = groupProps.onClick
    props.onChange = () => {}
    props.tabIndex = groupProps.tabIndex
  }

  useEffect(() => {
    if (indeterminate !== undefined && ref.current) {
      ref.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  // Prevent focused state lost
  const onMouseDown = (event: MouseEvent) => event.preventDefault()
  
  const state = indeterminate && !props.checked ? 'mixed' as const : Boolean(props.checked)

  const switchProps = {
    className,
    size,
    kind,
    variant,
    role: mode,
    'aria-checked': state,
    'aria-invalid': variant === 'error',
    'aria-disabled': props.disabled,
  }

  const toggleProps = omit(props, 'onClick', 'onChange', 'onFocus', 'onBlur', 'onKeyDown')

  const presetSwitchProps = foldPreset(theme.toggleBox.preset.Switch, switchProps)
  const presetTextProps = foldPreset(theme.toggleBox.preset.Text, {...switchProps, labelPosition})

  return (
    <Container labelPosition={labelPosition} {...toggleProps} >
      <input {...props} ref={setRef} type={mode} />
      <Switch {...presetSwitchProps} {...switchProps} adjacentSelector='input' onMouseDown={onMouseDown}>
        {children && children(state)}
      </Switch>
      { label && <Text {...presetTextProps} as='span' crop onMouseDown={onMouseDown} onClick={() => console.log(111)}>{label}</Text> }
    </Container>
  )
}

ToggleBox.defaultProps = {
  size: 'm',
  variant: 'primary',
  type: 'checkbox',
  labelPosition: 'end',
}

export default ToggleBox