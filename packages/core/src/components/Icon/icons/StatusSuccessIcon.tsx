import React from 'react'
import { makeIcon } from '../makeIcon'

export const StatusSuccessIcon = makeIcon({ viewBox: '0 0 24 24', name: 'status-success' },
  <path
    d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-5.419-4.814a1 1 0 00-1.395.233l-4.314 6.04-2.165-2.166a1 1 0 00-1.414 1.414l3 3a1 1 0 001.52-.126l5-7a1 1 0 00-.232-1.395z'
  />
)

StatusSuccessIcon.platform = 'mobile'
