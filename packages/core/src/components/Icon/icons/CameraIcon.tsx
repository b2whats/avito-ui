import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const CameraIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='camera'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.318 6h3.4c.446 0 .608.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v12.436c0 .446-.046.608-.134.77a.908.908 0 01-.378.378c-.162.088-.324.134-.77.134H3.282c-.446 0-.607-.046-.77-.134a.908.908 0 01-.378-.378c-.088-.162-.134-.324-.134-.77V7.282c0-.446.046-.607.134-.77a.909.909 0 01.378-.378c.163-.088.324-.134.77-.134h3.4l.882-2.351A1 1 0 018.5 3h7a1 1 0 01.936.649L17.318 6zM12 18a5 5 0 110-10 5 5 0 010 10zm3-5a3 3 0 11-6 0 3 3 0 016 0z'
    />
  </Icon>
)

CameraIcon.platform = 'mobile'