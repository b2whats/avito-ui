import React from 'react'
import { uiComponent } from '../../theme'
import { Box } from '../Layout'
import { BadgeProps } from './contract'
import { badgeTheme } from './theme'

export const Badge = uiComponent('Badge', badgeTheme)<
  BadgeProps
>(({ gapSize, gapColor, ...props }, { tokens }) => {
  const shadow = gapSize && gapColor
    ? `0 0 0 ${gapSize}px ${tokens.palette[gapColor] || gapColor};` : false
  return <Box {...props} shadow={shadow}>{props.children}</Box>
})
