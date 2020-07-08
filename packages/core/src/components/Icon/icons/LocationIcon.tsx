import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const LocationIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='location'>
    <path
      d='M11.998 2a8 8 0 00-6.552 12.59l5.741 7.993a1 1 0 001.625 0l5.734-7.985c2.54-3.629 1.661-8.617-1.958-11.151a7.967 7.967 0 00-4.59-1.448zM15 10a3 3 0 11-6 0 3 3 0 016 0z'
    />
  </Icon>
)

LocationIcon.platform = 'mobile'
