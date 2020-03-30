import React from 'react'
import { useThemeMemo } from '../../theme/'
import { Toggle } from '../Toggle'
import { Icon } from '../Icon'
import { CheckboxProps } from './contract'
import { createCheckboxTheme } from './theme'

const Checkbox = ({ override, ...props }: CheckboxProps) => {
  const [_, checkboxTheme] = useThemeMemo(createCheckboxTheme, override)

  props = {
    variant: 'primary',
    size: 'm',
    shape: 'square',
    ...props,
  }

  return (
    <Toggle {...props} mode='checkbox' override={checkboxTheme}>
      {({ checked }) => (
        checked === 'mixed' ? <Icon name='checkbox-intermediate' size='auto' /> :
        checked === true ? <Icon name='checkbox-checked' size='auto' /> :
        undefined
      )}
    </Toggle>
  )
}

export default Checkbox
