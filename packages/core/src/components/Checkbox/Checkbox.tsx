import React from 'react'
import { Toggle } from '../Toggle/'
import { CheckboxProps } from './contract'
import { checkboxTheme } from './theme'
import { uiComponent } from '../../theme'

export const Checkbox = uiComponent('Checkbox', checkboxTheme)((props: CheckboxProps, { theme }) => (
  <Toggle {...props} mode='checkbox' override={theme}>
    {({ checked, Icon }) => checked && Icon && <Icon.component {...Icon.props} size='auto' />}
  </Toggle>
))

export default Checkbox
