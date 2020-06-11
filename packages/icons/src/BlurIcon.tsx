import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const BlurIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='blur'>
    <path
      d='M16.5 3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-12 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6.5 6a2 2 0 11-4 0 2 2 0 014 0zm-6.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM21 16.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0-6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM16.5 21a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM9 22.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0-18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM11 9a2 2 0 11-4 0 2 2 0 014 0zm4 8a2 2 0 100-4 2 2 0 000 4zm2-8a2 2 0 11-4 0 2 2 0 014 0z'
    />
  </Icon>
)

BlurIcon.platform = 'mobile'
