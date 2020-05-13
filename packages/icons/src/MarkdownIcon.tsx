import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const MarkdownIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 16 16' name='markdown'>
    <path
      d='M9 2a1 1 0 00-2 0v8.586L4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L9 10.586V2z'
    />
  </Icon>
)

MarkdownIcon.platform = 'mobile'