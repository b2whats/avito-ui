import React from 'react'
import { createIcon } from './createIcon'

createIcon({
  name: 'crop',
  width: 24,
  height: 24,
  svg: (
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 2v2H2a1 1 0 000 2h2v13a1 1 0 001 1h11v-2H6V2a1 1 0 00-2 0zm14 4v16a1 1 0 102 0v-2h2a1 1 0 100-2h-2V5a1 1 0 00-1-1H8v2h10z'
    />
  ),
})
