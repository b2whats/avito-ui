import React from 'react'
import { uiComponent } from '../../theme'
import { foldThemeParams } from '../../styled-system'
import { Text } from '../Text/'
import { LinkProps } from './contract'
import { linkTheme } from './theme'

export const Link = uiComponent('Link', linkTheme)(({ children, ...props }: LinkProps, { theme }) => {
  if (props.noVisited) props.colorVisited = undefined
  
  const { Link } = foldThemeParams(props, theme)

  return (
    <Text<LinkProps> as='a' {...Link.props} {...props}>
      { children }
    </Text>
  )
})