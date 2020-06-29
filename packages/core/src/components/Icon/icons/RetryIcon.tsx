import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const RetryIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='retry'>
    <path
      d='M12 8.002a1 1 0 001.514.857l5-3a1 1 0 000-1.715l-5-3A1 1 0 0012 2.002v2a9 9 0 109 9 1 1 0 00-2 0 7 7 0 11-7-7v2z'
    />
  </Icon>
)

RetryIcon.platform = 'mobile'
