import React from 'react'
import { createIcon } from './createIcon'

createIcon({
  platform: 'mobile',
  name: 'clear',
  width: 24,
  height: 24,
  svg: (
    <path
      d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.707 7.707L13.414 12l2.293 2.293a.999.999 0 11-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 01-1.414 0 .999.999 0 010-1.414L10.586 12 8.293 9.707a.999.999 0 111.414-1.414L12 10.586l2.293-2.293a.999.999 0 111.414 1.414z'
    />
  ),
})

