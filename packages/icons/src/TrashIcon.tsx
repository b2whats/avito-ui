import React from 'react'
import { Icon, IconProps } from '@avito/core'

export const TrashIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='trash'>
    <path
      d='M15.5 3H20a1 1 0 110 2H4a1 1 0 010-2h4.5L9 2h6l.5 1zM5 7h14l-.894 12.514c-.037.524-.056.785-.17.984a1 1 0 01-.432.402c-.206.1-.469.1-.994.1H7.49c-.525 0-.788 0-.994-.1a1 1 0 01-.432-.402c-.114-.199-.133-.46-.17-.984L5 7z'
    />
  </Icon>
)

TrashIcon.platform = 'mobile'