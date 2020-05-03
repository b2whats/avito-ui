import React from 'react'
import { createIcon } from './createIcon'

createIcon({
  name: 'status-error',
  width: 24,
  height: 24,
  svg: (
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM11 7a1 1 0 112 0v5a1 1 0 11-2 0V7zm2.5 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
    />
  ),
})
