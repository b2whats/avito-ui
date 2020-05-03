import React from 'react'
import { createIcon } from './createIcon'

createIcon({
  name: 'cross',
  width: 24,
  height: 24,
  svg: (
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M18.707 5.293a1 1 0 00-1.414 0L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 000-1.414z'
    />
  ),
})