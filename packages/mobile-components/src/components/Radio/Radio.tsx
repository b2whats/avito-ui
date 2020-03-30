import React from 'react'
import { useThemeMemo } from '../../theme/'
import { Toggle } from '../Toggle'
import { Icon } from '../Icon'
import { RadioProps } from './contract'
import { createRadioTheme } from './theme'

const Radio = ({ override, ...props}: RadioProps) => {
  const [_, radioTheme] = useThemeMemo(createRadioTheme, override)

  props = {
    variant: 'primary',
    size: 'm',
    shape: 'circle',
    ...props,
  }

  return (
    <Toggle {...props} mode='radio' override={radioTheme}>
      {({ checked }) => (
        checked === true ? <Icon name='radio-checked' size='auto' /> :
        undefined
      )}
    </Toggle>
  )
}

export default Radio
