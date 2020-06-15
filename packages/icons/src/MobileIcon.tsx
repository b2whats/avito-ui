import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const MobileIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='mobile'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H6zm12 3H6v14h12V5z'
    />
  </Icon>
)

MobileIcon.platform = 'mobile'
