import React from 'react'
import { Icon, IconProps } from '../'

export const TimeIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='time'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-6.293 3.707a1 1 0 000-1.414L13 11.586V7a1 1 0 10-2 0v5a1 1 0 00.293.707l3 3a1 1 0 001.414 0z'
    />
  </Icon>
)

TimeIcon.platform = 'mobile'
