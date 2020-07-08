import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const AddNoteIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='add-note'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 2a1 1 0 011-1h14a1 1 0 011 1v12.083A6.036 6.036 0 0019 14a5.973 5.973 0 00-3.318 1H7v2h6.803A5.972 5.972 0 0013 20c0 .34.028.675.083 1H5a1 1 0 01-1-1V2zm13 3H7v2h10V5zM7 10h10v2H7v-2zm11 9v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z'
    />
  </Icon>
)

AddNoteIcon.platform = 'mobile'
