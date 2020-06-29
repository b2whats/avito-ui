import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const YoutubeIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='youtube'>
    <path
      d='M12 4s6.88 0 8.595.478c.947.263 1.692 1.037 1.945 2.02C23 8.281 23 12 23 12s0 3.719-.46 5.502c-.253.983-.998 1.758-1.945 2.02C18.88 20 12 20 12 20s-6.88 0-8.595-.477c-.947-.264-1.692-1.038-1.945-2.021C1 15.719 1 12 1 12s0-3.72.46-5.502c.253-.983.998-1.757 1.945-2.02C5.12 4 12 4 12 4zm3.52 8L9.8 8.444v7.112L15.52 12z'
    />
  </Icon>
)

YoutubeIcon.platform = 'mobile'
