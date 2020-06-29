import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const MyItemsIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='my-items'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20 3.286C20 2.576 19.424 2 18.714 2H5.286C4.576 2 4 2.576 4 3.286v17.428C4 21.424 4.576 22 5.286 22h13.428c.71 0 1.286-.576 1.286-1.286V3.286zM12 18H6v2h6v-2zm-6-4h12v2H6v-2zM18 4H6v8h12V4z'
    />
  </Icon>
)

MyItemsIcon.platform = 'mobile'
