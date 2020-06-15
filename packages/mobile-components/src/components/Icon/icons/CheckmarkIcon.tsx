import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const CheckmarkIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 20 20' name='checkmark'>
    <path d='M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z' />
    <path d='M5.6123 10.4711L8.45819 13.317L14.3708 7.4043' />
    <path d='M5.6123 10.4711L8.45819 13.317L14.3708 7.4043' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </Icon>
)

CheckmarkIcon.category = 'component'
