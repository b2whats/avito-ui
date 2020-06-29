import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const OutgoingCallIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 16 16' name='outgoing-call'>
    <path
      d='M9.646 5.646l2.5-2.5L10 1h5v5l-2.146-2.146-2.5 2.5-.708-.708zm1.925 4.148a1 1 0 00-1.136-.019L8.553 11.03A8.54 8.54 0 014.97 7.447l1.255-1.883a1 1 0 00-.019-1.135L4.25 1.689a1 1 0 00-1.52-.125L1.145 3.146A.5.5 0 001 3.5C1 9.851 6.149 15 12.5 15a.5.5 0 00.354-.146l1.582-1.583a1 1 0 00-.126-1.52l-2.739-1.957z'
    />
  </Icon>
)

OutgoingCallIcon.platform = 'mobile'
