import React from 'react'
import { uiComponent } from '../../theme'
import { Toggle } from '../Toggle/'
import { RadioProps } from './contract'
import { radioTheme } from './theme'

export const Radio = uiComponent('Radio', radioTheme)<RadioProps, HTMLInputElement>((props, { theme, ref }) => (
  <Toggle {...props} mode='radio' override={theme} shape='circle' ref={ref}>
    {({ checked, Icon }) => checked && Icon && <Icon.component {...Icon.props} size='auto' />}
  </Toggle>
))
