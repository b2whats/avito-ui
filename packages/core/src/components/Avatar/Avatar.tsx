import React, { Children, ReactNode, useState, useEffect, isValidElement } from 'react'
import { foldThemeParams, createClassName, css } from '../../styled-system'
import { uiComponent } from '../../theme'
import { filterProps, omit } from '../../utils'
import { IconProps } from '../Icon'
import { Text } from '../Text'
import { AvatarProps } from './contract'
import { avatarTheme } from './theme'

const avatarClassName = createClassName<AvatarProps, typeof avatarTheme>({
  display: 'inline-flex',
  mapPropsToStyle: true,
  cssRewrite: (textRules) => (`
    & *:nth-child(2) {
      /* position badge above overlay */
      z-index: 1;
    }
    ${textRules}
  `),
})

const imageClassName = css`
  border-radius: inherit;
  max-width: 100%;
  max-height: 100%;
`

export const Avatar = uiComponent('Avatar', avatarTheme)<AvatarProps>((props, { theme, tokens, testId }) => {
  const [isFallback, setFallback] = useState(props.src == null)
  const onError = () => setFallback(true)
  useEffect(() => setFallback(props.src == null), [props.src])

  const { Wrapper, Badge, Fallback } = foldThemeParams({ ...props, isFallback }, theme)

  const Tag = props.as || 'span'
  const alt = props.alt || 'Пользователь'
  const aria = {
    role: props.onClick ? 'button' : 'img',
    'aria-disabled': props.disabled,
  }
  const renderFallback = (children: ReactNode, fallbackProps: IconProps) => (
    isValidElement(children) ? <children.type {...fallbackProps} {...children.props} /> :
    typeof children === 'function' ? Children.only(children(fallbackProps)) :
    typeof children === 'string' ? <Text crop>{children}</Text> :
    typeof props.alt === 'string' ? <Text crop>{props.alt[0].toUpperCase()}</Text> :
    <Fallback.component {...fallbackProps} />)

  const avatarStyle = avatarClassName(props, tokens, Wrapper)

  // FIXME put onClick on img / fallback for easier badge clicks?
  return (
    <Tag css={avatarStyle} {...aria} {...filterProps(omit(props, 'src'), Tag)} {...testId()}>
      { isFallback
        ? renderFallback(props.children, Fallback)
        : <img css={imageClassName} draggable='false' src={props.src} onError={onError} alt={alt} {...testId('image')} /> }
      { props.badge &&
        <props.badge.type {...Badge} {...props.badge.props} {...testId('badge')} />}
    </Tag>
  )
})
