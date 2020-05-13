import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const RadioCheckedIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 250 250' name='radio-checked'>
    <circle cx='125' cy='125' r='48'/>
  </Icon>
)

RadioCheckedIcon.platform = 'mobile'
RadioCheckedIcon.caregory = 'component'