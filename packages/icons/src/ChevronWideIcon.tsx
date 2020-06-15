import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const ChevronWideIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='chevron-wide'>
    <path d='M11.9999 10.1792L19.4699 14.8479C19.9383 15.1406 20.5552 14.9983 20.8479 14.5299C21.1406 14.0616 20.9983 13.4446 20.5299 13.1519L12.5299 8.15193C12.2057 7.94926 11.7942 7.94926 11.4699 8.15193L3.46994 13.1519C3.0016 13.4446 2.85923 14.0616 3.15194 14.5299C3.44465 14.9983 4.0616 15.1406 4.52993 14.8479L11.9999 10.1792Z' />
  </Icon>
)

ChevronWideIcon.platform = 'mobile'
