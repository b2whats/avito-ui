import React from 'react'
import { Icon, IconProps } from '../'

export const LightAutoIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='light-auto'>
    <path
      d='M6 13h3.753l-1.73 7.783c-.216.977.977 1.631 1.684.924l9-9c.63-.63.184-1.707-.707-1.707h-3.753l1.73-7.783c.216-.977-.977-1.632-1.684-.924l-9 9C4.663 11.923 5.109 13 6 13zm12.419 9l-.477 1.336a1 1 0 11-1.884-.672l2.5-7A1 1 0 0119.5 15h1a1 1 0 01.942.664l2.5 7a1 1 0 11-1.884.672L21.581 22h-3.162zm2.448-2L20 17l-.867 3h1.734z'
    />
  </Icon>
)

LightAutoIcon.platform = 'mobile'
