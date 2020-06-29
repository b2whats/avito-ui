import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const StatisticsIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='statistics'>
    <path
      d='M2.72 16.01l3.805-6.977a2.5 2.5 0 114.172-.338l4.185 5.382a2.506 2.506 0 01.837-.068l3.806-6.976a2.5 2.5 0 111.756.958l-3.806 6.976a2.5 2.5 0 11-4.172.338L9.119 9.923a2.505 2.505 0 01-.837.068l-3.806 6.976a2.5 2.5 0 11-1.756-.958z'
    />
  </Icon>
)

StatisticsIcon.platform = 'mobile'
