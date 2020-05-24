import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const StarIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 14 14' name='star'>
    <path
      d='M7 10.54l-3.365 2.145a.35.35 0 01-.527-.383l1-3.863L1.03 5.902a.35.35 0 01.201-.62l3.983-.241 1.461-3.713a.35.35 0 01.652 0l1.46 3.713 3.984.242a.35.35 0 01.201.62l-3.08 2.536 1 3.863a.35.35 0 01-.526.383L7 10.54z'
    />
  </Icon>
)

StarIcon.platform = 'mobile'