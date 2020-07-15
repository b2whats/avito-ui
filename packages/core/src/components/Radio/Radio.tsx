import React from 'react'
import { uiComponent } from '../../theme'
import { Toggle } from '../Toggle/'
import { RadioProps } from './contract'
import { radioTheme } from './theme'

export const Radio = uiComponent('Radio', radioTheme)((props: RadioProps, { theme }) => (
  <Toggle {...props} mode='radio' shape='circle' override={theme}>
    {({ checked, Icon }) => checked && Icon && <Icon.component {...Icon.props} size='auto' />}
  </Toggle>
))
