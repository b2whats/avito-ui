import React from 'react'
import { createIcon } from './createIcon'

createIcon({
  platform: 'mobile',
  name: 'point',
  width: 10,
  height: 10,
  svg: (
    <circle cx='5' cy='5' r='5'/>
  ),
})