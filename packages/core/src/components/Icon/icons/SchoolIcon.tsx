import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const SchoolIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 16 16' name='school'>
    <path
      d='M.895 2.408C3.398 1.87 5.599 2.233 7.5 3.5V14c-1.848-.924-3.981-1.136-6.399-.637a.5.5 0 01-.601-.49V2.897a.5.5 0 01.395-.489zM15.105 2.408C12.602 1.87 10.401 2.233 8.5 3.5V14c1.848-.924 3.981-1.136 6.399-.637a.5.5 0 00.601-.49V2.897a.5.5 0 00-.395-.489z'
    />
  </Icon>
)

SchoolIcon.platform = 'mobile'