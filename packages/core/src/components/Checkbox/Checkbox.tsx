import React from 'react'
import { useTheme, mergeTheme } from '../../theme/'
import { Toggle } from '../Toggle/'
import { Icon } from '../Icon/'
import { CheckboxProps } from './contract'
import { checkboxTheme } from './theme'

const Checkbox = ({ override, ...props }: CheckboxProps) => {
  const theme = useTheme()
  const componentTheme = mergeTheme(checkboxTheme, theme.Checkbox, override)

  props = {
    variant: 'primary',
    size: 'm',
    shape: 'square',
    ...props,
  }

  return (
    <Toggle {...props} mode='checkbox' override={componentTheme}>
      {({ checked, iconProps }) => checked && <Icon {...iconProps} size='auto' />}
    </Toggle>
  )
}

export default Checkbox
