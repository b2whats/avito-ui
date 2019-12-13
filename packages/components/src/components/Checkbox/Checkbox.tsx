import React from 'react'
import { Toggle } from '../Toggle/'
import { Icon } from '../Icon/'
import { CheckboxProps } from './contract'

const Checkbox = (props: CheckboxProps) => {
  props = {
    variant: 'primary',
    size: 'm',
    shape: 'square',
    ...props,
  }

  return (
    <Toggle {...props} mode='checkbox' scheme='checkbox'>
      {({ state }) => (
        state === 'mixed' ? <Icon name='checkbox-intermediate' size='auto' /> :
        state === true ? <Icon name='checkbox-checked' size='auto' /> :
        undefined
      )}
    </Toggle>
  )
}

export default Checkbox
