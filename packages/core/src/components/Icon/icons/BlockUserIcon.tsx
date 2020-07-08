import React from 'react'
import { IconProps } from '../contract'
import { Icon } from '../Icon'

export const BlockUserIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='block-user'>
    <path
      d='M19.587 21H3.282c-.446 0-.607-.046-.77-.134a.908.908 0 01-.378-.378c-.088-.162-.134-.324-.134-.77v-1.18c0-.522.096-.995.281-1.41a2.82 2.82 0 01.81-1.053c.352-.285.785-.5 1.288-.635l3.636-.97A2 2 0 009.5 12.539v-.355c-.844-.652-1.459-1.682-1.77-3.039L2.293 3.707a1 1 0 111.414-1.414l18 18a1 1 0 11-1.413 1.414L19.587 21zM8.252 4.01C9.022 2.744 10.342 2 12 2c2.7 0 4.5 1.974 4.5 4.95 0 1.777-.388 3.209-1.075 4.232L8.252 4.01z'
    />
  </Icon>
)

BlockUserIcon.platform = 'mobile'