import React from 'react'
import { foldThemeParams } from '../../styled-system'
import { uiComponent } from '../../theme'
import { Text } from '../Text/'
import { LinkProps } from './contract'
import { linkTheme } from './theme'

export const Link = uiComponent('Link', linkTheme)(({ children, ...props }: LinkProps, { theme }) => {
  if (props.noVisited) {
    props.colorVisited = undefined
    props.bgVisited = undefined
    props.borderColorVisited = undefined
  }
  
  const { Link } = foldThemeParams(props, theme)

  return (
    <Text<LinkProps> as='a' {...Link.props} {...props}>
      { children }
    </Text>
  )
})