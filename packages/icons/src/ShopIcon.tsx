import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const ShopIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 16 16' name='shop'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.999 10.552a.5.5 0 00.497.448H12.5a.5.5 0 00.48-.363l2-7A.5.5 0 0014.5 3H4.216L3.947.448A.5.5 0 003.45 0H.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1.6l.899 8.552zM4.5 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM11.5 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'
    />
  </Icon>
)

ShopIcon.platform = 'mobile'