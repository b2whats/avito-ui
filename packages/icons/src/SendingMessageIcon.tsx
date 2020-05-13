import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const SendingMessageIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 16 16' name='sending-message'>
    <path
      d='M8 15A7 7 0 118 1a7 7 0 010 14zm0-1.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm2.828-3.732L8.75 7.689V4.75a.75.75 0 00-1.5 0V8c0 .199.079.39.22.53l2.298 2.298a.75.75 0 101.06-1.06z'
    />
  </Icon>
)

SendingMessageIcon.platform = 'mobile'