import React from 'react'
import { Icon, IconProps } from '../'

export const NotificationsOffIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='notifications-off'>
    <path
      d='M5.361 6.775L2.293 3.707a1 1 0 011.414-1.414l18.041 18.039a1 1 0 01-1.456 1.375L18.587 20H14.5a2.5 2.5 0 11-5 0l-5-.003a1.5 1.5 0 01-1.299-2.25L5 14.632V9c0-.778.127-1.526.361-2.225zM19 9v5.757L7.71 3.467A7 7 0 0119 9z'
    />
  </Icon>
)

NotificationsOffIcon.platform = 'mobile'
