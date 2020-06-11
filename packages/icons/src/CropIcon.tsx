import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const CropIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='crop'>
    <path
      d='M4 2v2H2a1 1 0 000 2h2v13a1 1 0 001 1h11v-2H6V2a1 1 0 00-2 0zm14 4v16a1 1 0 102 0v-2h2a1 1 0 100-2h-2V5a1 1 0 00-1-1H8v2h10z'
    />
  </Icon>
)

CropIcon.platform = 'mobile'
