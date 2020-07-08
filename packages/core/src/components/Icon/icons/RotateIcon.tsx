import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const RotateIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='rotate'>
    <path
      d='M13 0a9 9 0 00-9 9H2c-.89 0-1.337 1.077-.707 1.707l3 3a1 1 0 001.414 0l3-3C9.337 10.077 8.891 9 8 9H6a7 7 0 1114 0 1 1 0 102 0 9 9 0 00-9-9zM7.293 16.707l5 5a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 0l-5 5a1 1 0 000 1.414z'
    />
  </Icon>
)

RotateIcon.platform = 'mobile'
