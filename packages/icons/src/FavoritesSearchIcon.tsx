import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const FavoritesSearchIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='favorites-search'>
    <path
      d='M21.121 5.121A3 3 0 0017 .764a3 3 0 00-4.121 4.357l3.414 3.415a1 1 0 001.414 0l3.414-3.415zm-1.414 15.172l-4.1-4.1A6.97 6.97 0 0017 12a1 1 0 10-2 0 5 5 0 11-5-5 1 1 0 100-2 7 7 0 104.192 12.606l4.1 4.101a1 1 0 001.415-1.414z'
    />
  </Icon>
)

FavoritesSearchIcon.platform = 'mobile'
