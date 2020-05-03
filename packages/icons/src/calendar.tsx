import React from 'react'
import { createIcon } from './createIcon'

createIcon({
  name: 'calendar',
  width: 24,
  height: 24,
  svg: (
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6 2a1 1 0 012 0v1h8V2a1 1 0 112 0v1h1.4c.56 0 .84 0 1.054.109a1 1 0 01.437.437C21 3.76 21 4.04 21 4.6V7H3V4.6c0-.56 0-.84.109-1.054a1 1 0 01.437-.437C3.76 3 4.04 3 4.6 3H6V2zm15 7H3v10.4c0 .56 0 .84.109 1.054a1 1 0 00.437.437C3.76 21 4.04 21 4.6 21h14.8c.56 0 .84 0 1.054-.109a1 1 0 00.437-.437C21 20.24 21 19.96 21 19.4V9z'
    />
  ),
})
