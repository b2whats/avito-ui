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
      {({ checked }) => (
        checked === 'mixed' ? <Icon name='checkbox-intermediate' size='auto' /> :
        checked === true ? <Icon name='checkbox-checked' size='auto' /> :
        undefined
      )}
    </Toggle>
  )
}

export default Checkbox