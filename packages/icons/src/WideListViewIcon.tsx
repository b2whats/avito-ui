import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const WideListViewIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='wide-list-view'>
    <path
      d='M3.109 3.546C3 3.76 3 4.04 3 4.6v6.8c0 .56 0 .84.109 1.054a1 1 0 00.437.437C3.76 13 4.04 13 4.6 13h14.8c.56 0 .84 0 1.054-.109a1 1 0 00.437-.437C21 12.24 21 11.96 21 11.4V4.6c0-.56 0-.84-.109-1.054a1 1 0 00-.437-.437C20.24 3 19.96 3 19.4 3H4.6c-.56 0-.84 0-1.054.109a1 1 0 00-.437.437zM3 16a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1z'
    />
  </Icon>
)

WideListViewIcon.platform = 'mobile'
