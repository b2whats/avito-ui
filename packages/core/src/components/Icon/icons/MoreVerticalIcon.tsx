import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const MoreVerticalIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='more-vertical'>
    <path
      d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-2 8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z'
    />
  </Icon>
)

MoreVerticalIcon.platform = 'mobile'
