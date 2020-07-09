import React from 'react'
import { makeIcon } from '../makeIcon'

export const MoreIcon = makeIcon({ viewBox: '0 0 24 24', name: 'more' },
  <path
    d='M17 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-3 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-9-2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z'
  />
)

MoreIcon.platform = 'mobile'
