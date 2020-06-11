import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const HospitalIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 16 16' name='hospital'>
    <path
      d='M10 6h4.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H10v4.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V10H1.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H6V1.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V6z'
    />
  </Icon>
)

HospitalIcon.platform = 'mobile'
