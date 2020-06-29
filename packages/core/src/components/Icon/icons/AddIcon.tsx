import React from 'react'
import { Icon, IconProps } from '../'

export const AddIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='add'>
    <path
      d='M11 11V3.993A.994.994 0 0112 3c.552 0 1 .445 1 .993V11h7.007c.548 0 .993.444.993 1 0 .552-.445 1-.993 1H13v7.007A.994.994 0 0112 21c-.552 0-1-.445-1-.993V13H3.993A.994.994 0 013 12c0-.552.445-1 .993-1H11z'
    />
  </Icon>
)

AddIcon.platform = 'mobile'
