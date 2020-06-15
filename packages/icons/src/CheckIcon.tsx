import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const CheckIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='check'>
    <path
      d='M18.226 6.367a1 1 0 011.548 1.266l-9 11a1 1 0 01-1.481.074l-5-5a1 1 0 111.414-1.414l4.219 4.219 8.3-10.145z'
    />
  </Icon>
)

CheckIcon.platform = 'mobile'
