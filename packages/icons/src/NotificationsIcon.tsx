import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const NotificationsIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='notifications'>
    <path
      d='M9.5 19.998h-5a1.5 1.5 0 01-1.299-2.25L5 14.631V9a7 7 0 0114 0v5.634l1.799 3.116A1.5 1.5 0 0119.5 20h-5a2.5 2.5 0 01-5 0v-.002z'
    />
  </Icon>
)

NotificationsIcon.platform = 'mobile'