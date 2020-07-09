import React from 'react'
import { makeIcon } from '../makeIcon'

export const FavoritesItemFilledIcon = makeIcon({ viewBox: '0 0 36 36', name: 'favotites-item-filled' },
  <g>
    <g filter='url(#favotites-item-filed_svg__filter0_dd)'>
      <path
        d='M9.413 17.18A5.5 5.5 0 1118 10.337a5.5 5.5 0 118.587 6.843l-7.852 8.522a1 1 0 01-1.47 0L9.413 17.18z'
        fill='#fff'
      />
      <path
        d='M17.183 10.913l.817 1.16.817-1.16a4.5 4.5 0 117.03 5.594L18 25.024l-7.848-8.517a4.5 4.5 0 117.03-5.594z'
        stroke='#fff'
        strokeWidth={2}
      />
    </g>
    <defs>
      <filter
        id='favotites-item-filed_svg__filter0_dd'
        x={0}
        y={0}
        width={36}
        height={34.024}
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
)

FavoritesItemFilledIcon.platform = 'mobile'
