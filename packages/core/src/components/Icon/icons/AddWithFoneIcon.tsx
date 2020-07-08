import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const AddWithFoneIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='add-with-fone'>
    <path
      d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 6v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H8a1 1 0 110-2h3V8a1 1 0 112 0z'
    />
  </Icon>
)

AddWithFoneIcon.platform = 'mobile'