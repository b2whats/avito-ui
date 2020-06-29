import React from 'react'
import { Icon, IconProps } from '../'

export const ShareAndroidIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='share-android'>
    <path
      d='M15.053 18.438L7.939 14.29a3 3 0 110-4.578l7.114-4.15a3 3 0 111.008 1.727l-7.113 4.15a3.017 3.017 0 010 1.124l7.113 4.149a3 3 0 11-1.008 1.727z'
    />
  </Icon>
)

ShareAndroidIcon.platform = 'mobile'
