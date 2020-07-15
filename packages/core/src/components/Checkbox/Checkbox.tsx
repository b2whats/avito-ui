import React from 'react'
import { uiComponent } from '../../theme'
import { Toggle } from '../Toggle/'
import { CheckboxProps } from './contract'
import { checkboxTheme } from './theme'

export const Checkbox = uiComponent('Checkbox', checkboxTheme)<CheckboxProps, HTMLInputElement>((props, { theme, ref }) => (
  <Toggle {...props} mode='checkbox' override={theme} shape='square' ref={ref}>
    {({ checked, Icon }) => checked && Icon && <Icon.component {...Icon.props} size='auto' />}
  </Toggle>
))
