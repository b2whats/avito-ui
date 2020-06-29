import React from 'react'
import { Icon, IconProps } from '../'

export const MoreIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='more'>
    <path
      d='M17 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-3 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-9-2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z'
    />
  </Icon>
)

MoreIcon.platform = 'mobile'
