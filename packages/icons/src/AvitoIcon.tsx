import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const AvitoIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 85 85' name='avito'>
    <circle cx='60.65' cy='60.55' r='22.45' fill='#97CF26' />
    <circle cx='18.45' cy='60.55' r='10.45' fill='#A169F7' />
    <circle cx='60.65' cy='18.35' r='14.45' fill='#FF6163' />
    <circle cx='18.45' cy='18.35' r='18.45' fill='#0AF' />
  </Icon>
)

AvitoIcon.platform = 'mobile'
