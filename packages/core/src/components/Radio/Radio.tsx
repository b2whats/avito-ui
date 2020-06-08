import React from 'react'
import { Toggle } from '../Toggle/'
import { RadioProps } from './contract'
import { radioTheme } from './theme'
import { uiComponent } from '../../theme'

export const Radio = uiComponent('Radio', radioTheme)((props: RadioProps, { theme }) => (
  <Toggle {...props} mode='radio' override={theme}>
    {({ checked, Icon }) => checked && Icon && <Icon.component {...Icon.props} size='auto' />}
  </Toggle>
))
