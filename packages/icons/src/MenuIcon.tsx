import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const MenuIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='menu'>
    <path
      d='M21 6a1 1 0 00-1-1H4a1 1 0 000 2h16a1 1 0 001-1zm0 12a1 1 0 00-1-1h-8a1 1 0 100 2h8a1 1 0 001-1zm-1-7a1 1 0 110 2H8a1 1 0 110-2h12z'
    />
  </Icon>
)

MenuIcon.platform = 'mobile'
