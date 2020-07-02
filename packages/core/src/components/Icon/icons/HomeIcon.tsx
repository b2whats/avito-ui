import React from 'react'
import { makeIcon } from '../makeIcon'

export const HomeIcon = makeIcon({ viewBox: '0 0 24 24', name: 'home' },
  <path
    d='M15 21v-6.286a.714.714 0 00-.714-.714H9.714a.714.714 0 00-.714.714V21a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 01.293-.707l8-8a1 1 0 011.414 0l8 8A1 1 0 0121 11v10a1 1 0 01-1 1h-4a1 1 0 01-1-1z'
  />
)

HomeIcon.platform = 'mobile'
