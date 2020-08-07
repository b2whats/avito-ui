import React from 'react'
import { uiComponent } from '../../theme'
import { Card } from '../Card'
import { AlertProps } from './contract'
import { alertTheme } from './theme'

export const Alert = uiComponent('Alert', alertTheme)<AlertProps, HTMLDivElement>((props, { theme }) => {
  return (
    <Card {...props} override={theme} />
  )
})
