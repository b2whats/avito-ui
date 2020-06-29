import React from 'react'
import { Icon, IconProps } from '../'

export const LightOffIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='light-off'>
    <path
      d='M10.414 6.172l3.879-3.88c.707-.707 1.9-.052 1.683.925l-1.548 6.968-4.014-4.013zm-5.707-2.88l16 16a1 1 0 01-1.414 1.415L15 16.414l-5.293 5.293c-.707.707-1.9.053-1.683-.924L9.754 13H6c-.89 0-1.337-1.077-.707-1.707L7.586 9 3.293 4.707a1 1 0 011.414-1.414zM18 11h-2.757l2.585 2.586.88-.879c.63-.63.183-1.707-.708-1.707z'
    />
  </Icon>
)

LightOffIcon.platform = 'mobile'
