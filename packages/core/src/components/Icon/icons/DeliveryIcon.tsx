import React from 'react'
import { Icon, IconProps } from '../'

export const DeliveryIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='delivery'>
    <path
      d='M0 5a1 1 0 011-1h12a1 1 0 011 1v9h1V9a1 1 0 011-1h2.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V17a1 1 0 01-1 1h-2.05a2.5 2.5 0 11-4.9 0h-8.1a2.5 2.5 0 11-4.9 0H1a1 1 0 01-1-1V5z'
    />
  </Icon>
)

DeliveryIcon.platform = 'mobile'
