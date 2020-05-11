import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const NoImagePortraitIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='no-image-portrait'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 0a2 2 0 00-2 2v20a2 2 0 002 2h16a2 2 0 002-2V2a2 2 0 00-2-2H4zm2 16a1 1 0 100 2h10a1 1 0 100-2H6zm-1 4a1 1 0 011-1h6a1 1 0 110 2H6a1 1 0 01-1-1zm5.243-11.174a1 1 0 00-1.486 0L5 13h14l-3.659-5.691a1 1 0 00-1.682 0l-1.992 3.098-1.424-1.581zM7.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'
    />
  </Icon>
)

NoImagePortraitIcon.platform = 'mobile'