import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const MessageDeliveredReadIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 16 16' name='message-delivered-read'>
    <path
      d='M10.235 4.177a.75.75 0 00-1.058.089l-4.973 5.877L2.28 8.22a.75.75 0 00-1.06 1.06l2.5 2.5c.31.31.82.29 1.103-.045l5.5-6.5a.75.75 0 00-.088-1.058zM8.27 9.21l-.973 1.149L8.72 11.78c.31.31.82.29 1.103-.045l5.5-6.5a.75.75 0 10-1.146-.97l-4.973 5.878-.934-.934z'
    />
  </Icon>
)

MessageDeliveredReadIcon.platform = 'mobile'
