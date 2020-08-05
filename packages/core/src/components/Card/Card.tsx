import React, { isValidElement, ReactNode } from 'react'
import { foldThemeParams } from '../../styled-system/'
import { uiComponent } from '../../theme'
import { Image as ImageComponent, ImageProps } from '../Image/'
import { Box, Stack } from '../Layout/'
import { CardProps } from './contract'
import { cardTheme } from './theme'

export const Card = uiComponent('Card', cardTheme)<CardProps, HTMLDivElement>(({ children, ...props }, { theme, marker }) => {
  const { Card, Close, Content, Image } = foldThemeParams(props, theme)

  const renderImageSlot = (image: ReactNode, props: ImageProps) => image && (
    isValidElement(image) ? <image.type {...props} {...image.props} /> :
    typeof image === 'function' ? image(props) :
    typeof image === 'string' ? <ImageComponent src={image} alt='banner' /> :
    null
  )

  return (
    <Box position='relative' {...Card.props} {...props} marker={marker()}>
      { renderImageSlot(props.image, Image.props) }
      <Stack grow shrink column align='left' {...Content.props}>
        { children }
      </Stack>
      { props.onClose && <Close.component {...Close.props} onClick={props.onClose} marker={marker('close')} /> }
    </Box>
  )
})
