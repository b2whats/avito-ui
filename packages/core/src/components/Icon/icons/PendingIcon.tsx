import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const PendingIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='pending'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-3.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM8.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
    />
  </Icon>
)

PendingIcon.platform = 'mobile'