import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const SpinnerIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 20 20' name='spinner' >
    <defs>
      <linearGradient id='loader-gradient' x1='0' y1='0' x2='1' y2='0'>
        <stop offset='0' stopColor='white' stopOpacity='1' />
	      <stop offset='85%' stopColor='white' stopOpacity='0.2' />
      </linearGradient>

      <mask id='fade' maskUnits='userSpaceOnUse'>
        <rect width='100%' height='100%' fill='url(#loader-gradient)' />
      </mask>
    </defs>
    <g fill='none' strokeWidth='3' stroke='currentColor'>
      <path d=' M 18 10 A 8 8 0 0 0 2 10' strokeOpacity='0.2' />
      <path d=' M 18 10 A 8 8 0 0 1 2 10' mask='url(#fade)' />
    </g>
  </Icon>
)

SpinnerIcon.category = 'component'
