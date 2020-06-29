import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const CompanyUserIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 46 46' name='company-user'>
    <path d='M42 43.714h1.216c.275 0 .498.225.498.506v2.417c0 .28-.231.506-.498.506H4.784a.501.501 0 0 1-.498-.506V44.22c0-.28.231-.506.498-.506H6V1.361c0-.278.23-.504.509-.504H41.49c.281 0 .509.227.509.504v42.353zm-29.143-36v7.715h7.714V7.714h-7.714zm14.572 0v7.715h7.714V7.714h-7.714zm0 12.857v7.715h7.714V20.57h-7.714zm-14.572 0v7.715h7.714V20.57h-7.714zm0 12.858v7.714h7.714v-7.714h-7.714zm14.572 0v13.714h7.714V33.429h-7.714z' />
  </Icon>
)

CompanyUserIcon.category = 'component'
