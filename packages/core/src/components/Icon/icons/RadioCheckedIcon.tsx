import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const RadioCheckedIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 250 250' name='radio-checked'>
    <circle cx='125' cy='125' r='48' />
  </Icon>
)

RadioCheckedIcon.category = 'component'
