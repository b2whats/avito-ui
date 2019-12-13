import React from 'react'
import { Toggle } from '../Toggle'
import { Icon } from '../Icon'
import { RadioProps } from './contract'

const Radio = (props: RadioProps) => {
  props = {
    variant: 'primary',
    size: 'm',
    shape: 'circle',
    ...props,
  }

  return (
    <Toggle {...props} mode='radio' scheme='radio'>
      {({ state }) => (
        state === true ? <Icon name='radio-checked' size='auto' /> :
        undefined
      )}
    </Toggle>
  )
}

export default Radio
