import React from 'react'
import { foldThemeParams } from '../../styled-system'
import { uiComponent } from '../../theme'
import { Box } from '../Layout'
import { BadgeProps } from './contract'
import { badgeTheme } from './theme'

export const Badge = uiComponent('Badge', badgeTheme)<
  BadgeProps
>(({ gapSize, gapColor, ...props }, { tokens, theme }) => {
  const shadow = gapSize && gapColor
    ? `0 0 0 ${gapSize}px ${tokens.palette[gapColor] || gapColor};` : false
  const { Badge } = foldThemeParams(props, theme)
  return <Box {...Badge} {...props} shadow={shadow}>{props.children}</Box>
})
