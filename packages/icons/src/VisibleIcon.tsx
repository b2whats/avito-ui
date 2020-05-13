import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const VisibleIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='visible'>
    <path
      d='M1.047 11.59A12 12 0 0112 4.5a12 12 0 0110.953 7.09 1 1 0 010 .82A12 12 0 0112 19.5a12 12 0 01-10.953-7.09 1 1 0 010-.82zM12 17a5 5 0 100-10 5 5 0 000 10zm3-5a3 3 0 11-6 0 3 3 0 016 0z'
    />
  </Icon>
)

VisibleIcon.platform = 'mobile'