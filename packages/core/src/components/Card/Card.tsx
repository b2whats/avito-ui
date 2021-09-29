import React, { isValidElement, ReactNode } from 'react'
import { foldThemeParams } from '../../styled-system/'
import { uiComponent } from '../../theme'
import { Image as ImageComponent, ImageProps } from '../Image/'
import { Box, Stack } from '../Layout/'
import { CardProps } from './contract'
import { cardTheme } from './theme'

export const Card = uiComponent('Card', cardTheme)<CardProps>(({ children, ...props }, { theme, marker }) => {
  const { Card, Close, Content, Image } = foldThemeParams(props, theme)

  const renderImageSlot = (image: ReactNode, props: ImageProps) => image && (
    isValidElement(image) ? <image.type {...props} {...image.props} /> :
    typeof image === 'function' ? image(props) :
    typeof image === 'string' ? <ImageComponent src={image} alt='banner' /> :
    null
  )

  React.useCallback((aaa, bbbb = aaa): string => {
    if (aaa) return aaa
    aaa = bbbb

    return aaa
  }, [])

  return (
    <Box position='relative' {...Card} {...props} marker={marker()}>
      { renderImageSlot(props.image, Image) }
      <Stack grow shrink column align='left' {...Content}>
        { children }
      </Stack>
      { props.onClose && <Close.component {...Close} onClick={props.onClose} marker={marker('close')} /> }
    </Box>
  )
})


interface SomeThing {
  type: number | string
}

let someThing: SomeThing = {
  type: 5 as number,
}
