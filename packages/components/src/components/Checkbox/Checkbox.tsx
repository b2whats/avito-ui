import React from 'react'
import { useTheme } from '../../utils'
import { Toggle } from '../Toggle/'
import { Icon } from '../Icon/'
import { CheckboxProps } from './contract'

const Checkbox = (props: CheckboxProps) => {
  const theme = useTheme()

  props = {
    variant: 'primary',
    size: 'm',
    shape: 'square',
    ...props,
  }

  return (
    <Toggle {...props} mode='checkbox' override={theme.checkbox}>
      {({ checked }) => (
        checked === 'mixed' ? <Icon name='checkbox-intermediate' size='auto' /> :
        checked === true ? <Icon name='checkbox-checked' size='auto' /> :
        undefined
      )}
    </Toggle>
  )
}

export default Checkbox
