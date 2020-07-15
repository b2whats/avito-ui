import React from 'react'
import { uiComponent } from '../../theme'
import { Toggle } from '../Toggle/'
import { CheckboxProps } from './contract'
import { checkboxTheme } from './theme'

export const Checkbox = uiComponent('Checkbox', checkboxTheme)((props: CheckboxProps, { theme }) => (
  <Toggle {...props} mode='checkbox' shape='square' override={theme}>
    {({ checked, Icon }) => checked && Icon && <Icon.component {...Icon.props} size='auto' />}
  </Toggle>
))
