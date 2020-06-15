import React from 'react'
import { Icon, IconProps } from '../'

export const SwitcherIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 250 250' name='switcher'>
    <circle cx='125' cy='125' r='125' />
  </Icon>
)

SwitcherIcon.category = 'component'
