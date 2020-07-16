import React, { useState, useEffect } from 'react'
import { useVisibility } from '../../hooks/'
import { createClassName, foldThemeParams } from '../../styled-system/'
import { uiComponent } from '../../theme'
import { filterProps, invokeAll } from '../../utils/'
import { ImageProps } from './contract'
import { imageTheme } from './theme'

const imageClassName = createClassName<ImageProps, typeof imageTheme>(
  (themeStyle, props) => ({
    display: 'inline-block',
    maxWidth: 1,
    height: 'auto',
    ...themeStyle,
    ...props,
  }),
  (textRules, { objectFit }) => `
    ${objectFit ? `object-fit: ${objectFit};` : ''}
    ${textRules}
  `
)

export const Image = uiComponent('Image', imageTheme)<ImageProps, HTMLImageElement>((props, { theme, tokens }, [ref, setRef]) => {
  const [isFallback, setFallback] = useState(false)
  let visible = true

  if (props.lazy) {
    visible = useVisibility(ref, { once: true, ...(typeof props.lazy === 'object') && props.lazy })
  }
  useEffect(() => setFallback(false), [props.src])

  const onError = invokeAll(() => setFallback(true), props.onError)

  const { Image } = foldThemeParams(props, theme)
  const imageStyle = imageClassName(props, tokens, Image.style)

  const srcset = isFallback
    ? undefined
    : Array.isArray(props.srcset) ? props.srcset.join(',') : props.srcset
  const src = visible
    ? isFallback && props.fallbackSrc ? props.fallbackSrc : props.src
    : undefined

  return (
    <img ref={setRef} css={imageStyle} {...filterProps(props)} src={src} srcSet={srcset} onError={onError} />
  )
})
