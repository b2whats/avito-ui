import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const MessageNotSendIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 16 16' name='message-not-send'>
    <path
      d='M1 8a7 7 0 1014 0A7 7 0 001 8zm12.5 0a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-4.75.25a.75.75 0 01-1.5 0v-3.5a.75.75 0 011.5 0v3.5zM9 11a1 1 0 11-2 0 1 1 0 012 0z'
    />
  </Icon>
)

MessageNotSendIcon.platform = 'mobile'
