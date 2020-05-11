import React from 'react'
import { useTheme, mergeTheme } from '../../theme/'
import { Toggle } from '../Toggle/'
import { RadioProps } from './contract'
import { radioTheme } from './theme'

const Radio = ({ override, ...props}: RadioProps) => {
  const theme = useTheme()
  const componentTheme = mergeTheme(radioTheme, theme.Radio, override)

  props = {
    variant: 'primary',
    size: 'm',
    shape: 'circle',
    ...props,
  }

  return (
    <Toggle {...props} mode='radio' override={componentTheme}>
      {({ checked, Icon }) => checked && Icon && <Icon.component {...Icon.props} size='auto' />}
    </Toggle>
  )
}

export default Radio
