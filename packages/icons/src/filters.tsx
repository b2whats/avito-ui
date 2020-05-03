import React from 'react'
import { createIcon } from './createIcon'

createIcon({
  platform: 'mobile',
  name: 'cross',
  width: 0,
  height: 0,
  svg: (
    <defs>
      <filter id='shadow'>
        <feDropShadow dx='0.2' dy='0.4' stdDeviation='0.2' floodColor='#a9a9a9'/>
      </filter>
      <filter id='shadow2'>
        <feDropShadow dx='0' dy='0' stdDeviation='0.5' 
          floodColor='cyan'/>
      </filter>
      <filter id='shadow3'>
        <feDropShadow dx='-0.8' dy='-0.8' stdDeviation='0' 
          floodColor='pink' floodOpacity='0.5'/>
      </filter>
    </defs>
  ),
})