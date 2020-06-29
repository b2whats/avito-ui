import React from 'react'
import { Icon, IconProps } from '../'

export const LightOnIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='light-on'>
    <path
      d='M18 11c.89 0 1.337 1.077.707 1.707l-9 9c-.707.707-1.9.053-1.683-.924L9.754 13H6c-.89 0-1.337-1.077-.707-1.707l9-9c.707-.708 1.9-.053 1.683.924L14.246 11H18z'
    />
  </Icon>
)

LightOnIcon.platform = 'mobile'
