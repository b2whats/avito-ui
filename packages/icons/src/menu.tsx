import React from 'react'
import { createIcon } from './createIcon'

createIcon({
  name: 'menu',
  width: 24,
  height: 24,
  svg: (
    <g>
      <mask
        id='Menu_svg__a'
        maskUnits='userSpaceOnUse'
        x={3}
        y={5}
        width={18}
        height={14}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M21 6a1 1 0 00-1-1H4a1 1 0 000 2h16a1 1 0 001-1zm0 12a1 1 0 00-1-1h-8a1 1 0 100 2h8a1 1 0 001-1zm-1-7a1 1 0 110 2H8a1 1 0 110-2h12z'
        />
      </mask>
      <g mask='url(#Menu_svg__a)'>
        <path d='M-4-4h32v32H-4z' />
      </g>
    </g>
  ),
})
