import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const GridIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='grid'>
    <path
      d='M6 8v8H3a1 1 0 100 2h3v3a1 1 0 102 0v-3h8v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V8h3a1 1 0 100-2h-3V3a1 1 0 10-2 0v3H8V3a1 1 0 00-2 0v3H3a1 1 0 000 2h3zm10 8H8V8h8v8z'
    />
  </Icon>
)

GridIcon.platform = 'mobile'
