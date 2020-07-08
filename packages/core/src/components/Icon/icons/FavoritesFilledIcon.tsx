import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const FavoritesFilledIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='favorites-filled'>
    <path
      d='M3.413 12.18A5.5 5.5 0 1112 5.337a5.5 5.5 0 118.587 6.843l-7.851 8.522a1 1 0 01-1.471 0L3.413 12.18z'
    />
  </Icon>
)

FavoritesFilledIcon.platform = 'mobile'