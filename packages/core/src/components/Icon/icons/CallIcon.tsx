import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const CallIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='call'>
    <path
      d='M13.27 16.672L15.9 14.7a1 1 0 011.214.01l4.5 3.5a1 1 0 01.093 1.497l-2 2A1 1 0 0119 22C9.611 22 2 14.389 2 5a1 1 0 01.293-.707l2-2a1 1 0 011.496.093l3.5 4.5A1 1 0 019.3 8.1l-1.973 2.63a13.059 13.059 0 005.943 5.942z'
    />
  </Icon>
)

CallIcon.platform = 'mobile'
