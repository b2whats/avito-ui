import React from 'react'
import { makeIcon } from '../makeIcon'

export const PlusIcon = makeIcon({ viewBox: '0 0 16 16', name: 'plus' },
  <path d='M7 7H1a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0V9h6a1 1 0 1 0 0-2H9V1a1 1 0 1 0-2 0v6z' />
)

PlusIcon.platform = 'mobile'
