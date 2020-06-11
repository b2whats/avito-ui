import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const SportIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 16 16' name='sport'>
    <path
      d='M1 3.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V7h6V3.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V6h.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H15v2.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V9H5v3.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V10H.5a.5.5 0 01-.5-.5v-3A.5.5 0 01.5 6H1V3.5z'
    />
  </Icon>
)

SportIcon.platform = 'mobile'
