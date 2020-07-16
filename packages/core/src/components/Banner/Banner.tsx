import React from 'react'
import { uiComponent } from '../../theme'
import { Card } from '../Card/'
import { BannerProps } from './contract'
import { bannerTheme } from './theme'

export const Banner = uiComponent('Banner', bannerTheme)<BannerProps, HTMLDivElement>((props, { theme }) => {
  return (
    <Card {...props} override={theme} />
  )
})
