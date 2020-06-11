import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const MyLocationIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='my-location'>
    <path
      d='M2.649 10.939c-.86-.323-.867-1.536-.011-1.869l18-7c.81-.315 1.61.484 1.294 1.295l-7 18c-.333.856-1.546.848-1.868-.011l-2.84-7.575-7.575-2.84z'
    />
  </Icon>
)

MyLocationIcon.platform = 'mobile'
