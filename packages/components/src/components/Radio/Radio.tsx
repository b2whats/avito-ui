import React from 'react'
import { useTheme } from '../../utils'
import { Toggle } from '../Toggle'
import { Icon } from '../Icon'
import { RadioProps } from './contract'

const Radio = (props: RadioProps) => {
  const theme = useTheme()

  props = {
    variant: 'primary',
    size: 'm',
    shape: 'circle',
    ...props,
  }

  return (
    <Toggle {...props} mode='radio' override={theme.radio}>
      {({ checked }) => (
        checked === true ? <Icon name='radio-checked' size='auto' /> :
        undefined
      )}
    </Toggle>
  )
}

export default Radio
