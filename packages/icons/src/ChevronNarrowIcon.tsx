import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const ChevronNarrowIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='chevron-narrow'>
    <path d='M12 10.4142L16.2929 14.7071C16.6834 15.0976 17.3166 15.0976 17.7071 14.7071C18.0976 14.3166 18.0976 13.6834 17.7071 13.2929L12.7071 8.29289C12.3166 7.90237 11.6834 7.90237 11.2929 8.29289L6.29289 13.2929C5.90237 13.6834 5.90237 14.3166 6.29289 14.7071C6.68342 15.0976 7.31658 15.0976 7.70711 14.7071L12 10.4142Z' />
  </Icon>
)

ChevronNarrowIcon.platform = 'mobile'