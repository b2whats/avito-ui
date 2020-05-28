import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const CheckboxIndeterminateIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 21 12' name='checkbox-indeterminate'>
    <path
      d='M3.55,6 L8.45,6'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round' />
  </Icon>
)

CheckboxIndeterminateIcon.category = 'component'
