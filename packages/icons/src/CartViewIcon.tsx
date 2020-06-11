import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const CartViewIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='cart-view'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.316 20.949L9 19.054l5.684 1.895a1 1 0 00.632 0l6-2A1 1 0 0022 18V4a1 1 0 00-1.316-.949L15 4.946 9.316 3.05a1 1 0 00-.632 0l-6 2A1 1 0 002 6v14a1 1 0 001.316.949zM9 16.946l6 2V7.054l-6-2v11.892z'
    />
  </Icon>
)

CartViewIcon.platform = 'mobile'
