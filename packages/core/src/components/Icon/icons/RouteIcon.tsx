import React from 'react'
import { Icon, IconProps } from '../'

export const RouteIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='route'>
    <path
      d='M18 5H7.83a3.001 3.001 0 100 2H18a2 2 0 110 4H6a4 4 0 000 8h4v1.5a.5.5 0 00.82.384l3-2.5a.5.5 0 000-.768l-3-2.5a.5.5 0 00-.82.384V17H6a2 2 0 110-4h12a4 4 0 000-8zm-2 13a3 3 0 106 0 3 3 0 00-6 0z'
    />
  </Icon>
)

RouteIcon.platform = 'mobile'
