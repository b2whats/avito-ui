import React from 'react'
import { makeIcon } from '../makeIcon'

export const IncomingCallIcon = makeIcon({ viewBox: '0 0 16 16', name: 'incoming-call' },
  <path
    d='M14.646.646l.708.708-2.5 2.5L15 6h-5V1l2.146 2.146 2.5-2.5zm-3.075 9.148a1 1 0 00-1.136-.019L8.553 11.03A8.54 8.54 0 014.97 7.447l1.255-1.883a1 1 0 00-.019-1.135L4.25 1.689a1 1 0 00-1.52-.125L1.145 3.146A.5.5 0 001 3.5C1 9.851 6.149 15 12.5 15a.5.5 0 00.354-.146l1.582-1.583a1 1 0 00-.126-1.52l-2.739-1.957z'
  />
)

IncomingCallIcon.platform = 'mobile'
