import React from 'react'
import { createIcon } from './createIcon'

createIcon({
  name: 'help',
  width: 24,
  height: 24,
  svg: (
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-3a1 1 0 100-2 1 1 0 000 2zM8.912 8.313a1 1 0 001.372-.341A2 2 0 0114 9c0 .656-.226.97-1.14 1.732C11.525 11.845 11 12.573 11 14a1 1 0 102 0c0-.656.226-.97 1.14-1.732C15.475 11.155 16 10.427 16 9a4 4 0 00-7.43-2.059 1 1 0 00.342 1.372z'
    />
  ),
})
