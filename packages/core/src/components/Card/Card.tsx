import React from 'react'
import { foldThemeParams } from '../../styled-system/'
import { uiComponent } from '../../theme'
import { Box } from '../Layout/'
import { CardProps } from './contract'
import { cardTheme } from './theme'

export const Card = uiComponent('Card', cardTheme)<CardProps, HTMLDivElement>(({ children, ...props }, { theme, testId, marker }) => {
  const { Card, Close } = foldThemeParams(props, theme)

  return (
    <Box position='relative' {...Card.props} {...props} {...testId()}>
      {props.onClose && Close.component && <Close.component {...Close.props} onClick={props.onClose} marker={marker('close')} />}
      {children}
    </Box>
  )
})
