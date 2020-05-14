import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const CheckboxCheckedIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 12 12' name='checkbox-checked'>
    <path
      d='M2,6 L4.5,8.5 L10,2.5'
      stroke='currentColor'
      strokeWidth='1.72'
      fill='none'
      strokeLinecap='round' />
  </Icon>
)

CheckboxCheckedIcon.category = 'component'
