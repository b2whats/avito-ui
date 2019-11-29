import React from 'react'
import { createIcon } from '../createIcon'

createIcon({
  name: 'close-shadow',
  originalWidth: 30,
  originalHeight: 30,
  svg: (
    <g>
      <path fill='#fff' d='M3 3h24v24H3z' />
      <g filter='url(#close-shadow_svg__filter0_dd)' fill='#fff'>
        <mask id='close-shadow_svg__a'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M21.707 8.293a1 1 0 00-1.414 0L15 13.586 9.707 8.293a1 1 0 00-1.414 1.414L13.586 15l-5.293 5.293a1 1 0 101.414 1.414L15 16.414l5.293 5.293a1 1 0 001.414-1.414L16.414 15l5.293-5.293a1 1 0 000-1.414z'
          />
        </mask>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M21.707 8.293a1 1 0 00-1.414 0L15 13.586 9.707 8.293a1 1 0 00-1.414 1.414L13.586 15l-5.293 5.293a1 1 0 101.414 1.414L15 16.414l5.293 5.293a1 1 0 001.414-1.414L16.414 15l5.293-5.293a1 1 0 000-1.414z'
        />
        <path
          d='M20.293 8.293l1.414 1.414-1.414-1.414zm1.414 0l1.414-1.414-1.414 1.414zM15 13.586L13.586 15 15 16.414 16.414 15 15 13.586zM9.707 8.293L8.293 9.707l1.414-1.414zm-1.414 0l1.414 1.414-1.414-1.414zm0 1.414l1.414-1.414-1.414 1.414zM13.586 15L15 16.414 16.414 15 15 13.586 13.586 15zm-5.293 5.293l1.414 1.414-1.414-1.414zm0 1.414l-1.414 1.414 1.414-1.414zm1.414 0l1.414 1.414-1.414-1.414zM15 16.414L16.414 15 15 13.586 13.586 15 15 16.414zm6.707 5.293l-1.414-1.414 1.414 1.414zm0-1.414l-1.414 1.414 1.414-1.414zM16.414 15L15 13.586 13.586 15 15 16.414 16.414 15zm5.293-5.293l1.414 1.414-1.414-1.414zm0 0a1 1 0 01-1.414 0L23.12 6.88a3 3 0 00-4.242 0l2.828 2.828zM16.414 15l5.293-5.293L18.88 6.88l-5.293 5.293L16.414 15zm0-2.828l-5.293-5.293-2.828 2.828L13.586 15l2.828-2.828zm-5.293-5.293a3 3 0 00-4.242 0l2.828 2.828a1 1 0 01-1.414 0L11.12 6.88zm-4.242 0a3 3 0 000 4.242l2.828-2.828a1 1 0 010 1.414L6.88 6.88zm0 4.242l5.293 5.293L15 13.586 9.707 8.293 6.88 11.12zm2.828 10.586L15 16.414l-2.828-2.828-5.293 5.293 2.828 2.828zm0-1.414a1 1 0 010 1.414L6.88 18.88a3 3 0 000 4.242l2.828-2.828zm-1.414 0a1 1 0 011.414 0L6.88 23.12a3 3 0 004.242 0l-2.828-2.828zM13.586 15l-5.293 5.293 2.828 2.828 5.293-5.293L13.586 15zm0 2.828l5.293 5.293 2.828-2.828L16.414 15l-2.828 2.828zm5.293 5.293a3 3 0 004.242 0l-2.828-2.828a1 1 0 011.414 0L18.88 23.12zm4.242 0a3 3 0 000-4.242l-2.828 2.828a1 1 0 010-1.414l2.828 2.828zm0-4.242l-5.293-5.293L15 16.414l5.293 5.293 2.828-2.828zM20.293 8.293L15 13.586l2.828 2.828 5.293-5.293-2.828-2.828zm0 1.414a1 1 0 010-1.414l2.828 2.828a3 3 0 000-4.242l-2.828 2.828z'
          fillOpacity={0.9}
          mask='url(#close-shadow_svg__a)'
        />
      </g>
      <defs>
        <filter
          id='close-shadow_svg__filter0_dd'
          x={0}
          y={0}
          width={30}
          height={30}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1} />
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset />
          <feGaussianBlur stdDeviation={4} />
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' />
          <feBlend in2='effect1_dropShadow' result='effect2_dropShadow' />
          <feBlend in='SourceGraphic' in2='effect2_dropShadow' result='shape' />
        </filter>
      </defs>
    </g>
  ),
})
