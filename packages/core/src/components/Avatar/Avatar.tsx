import React, { useState, useCallback, useEffect } from 'react'
import { foldThemeParams, createClassName, css } from '../../styled-system'
import { uiComponent } from '../../theme'
import { filterProps, omit } from '../../utils'
import { AvatarProps } from './contract'
import { avatarTheme } from './theme'

const avatarClassName = createClassName<AvatarProps, typeof avatarTheme>(
  (themeStyle, props) => ({
    display: 'inline-flex',
    position: 'relative',
    shrink: false,
    grow: false,
    ...themeStyle,
    ...props,
  }),
  (textRules, { }, _, themeStyle) => (`
    ${textRules}
  `)
)
const imageClassName = css`
  border-radius: inherit;
  max-width: 100%;
  max-height: 100%;
`

export const Avatar = uiComponent('Avatar', avatarTheme)<
  AvatarProps,
  HTMLImageElement
>((props, { theme, tokens }, [_, setRef]) => {
  const [isFallback, setFallback] = useState(props.src == null)
  const onError = () => setFallback(true)
  useEffect(() => setFallback(props.src == null), [props.src])

  const { Wrapper, Badge } = foldThemeParams({ ...props, isFallback }, theme)
  const aria = {
    role: props.onClick ? 'button' : 'img',
    'aria-disabled': props.disabled,
  }

  // FIXME put onClick on img / fallback for easier badge clicks?
  return (
    <span css={avatarClassName(props, tokens, Wrapper.style)} {...aria} {...filterProps(omit(props, 'src', 'alt'))}>
      { !isFallback &&
        <img alt={props.alt} css={imageClassName} draggable='false' src={props.src} onError={onError} /> }
      { props.badge &&
        <props.badge.type {...Badge.props} {...props.badge.props} /> }
    </span>
  )
})
