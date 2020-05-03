import React from 'react'
import { createIcon } from './createIcon'

createIcon({
  name: 'info',
  width: 24,
  height: 24,
  svg: (
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1 15a1 1 0 102 0v-5a1 1 0 10-2 0v5zm2.5-9.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z'
    />
  ),
})
