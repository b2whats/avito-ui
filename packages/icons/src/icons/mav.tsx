import React from 'react'
import { createIcon } from '../createIcon'

createIcon({
  name: 'mav',
  originalWidth: 512,
  originalHeight: 292,
  svg: (
    <g>
      <rect stroke='#000000' strokeWidth='10' x='5' y='5' width='502' height='282' rx='30' fill='none'/>
      <path d='M102.4,8 L102.4,284' stroke='#000000' strokeWidth='10' strokeLinecap='square'></path>
      <path d='M450.4,8 L450.4,284' stroke='#000000' strokeWidth='10' strokeLinecap='square'></path>
      <circle fill='#97CF26' cx='320' cy='189' r='50'></circle>
      <circle fill='#A169F7' cx='226' cy='190' r='23'></circle>
      <circle fill='#FF6163' cx='320' cy='95' r='32'></circle>
      <circle fill='#00AAFF' cx='226' cy='95' r='41'></circle>
      <rect stroke='#000000' strokeWidth='10' x='35' y='117' width='41' height='58' rx='20.5' fill='none'></rect>
      <rect fill='#000000' x='470' y='105' width='15' height='100' rx='7.5'></rect>
      <rect fill='#000000' x='470' y='234' width='15' height='28' rx='7.5'></rect>
    </g>
  ),
})