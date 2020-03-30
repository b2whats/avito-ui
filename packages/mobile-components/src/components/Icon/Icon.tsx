import React from 'react'
import { css, keyframes } from '@emotion/core'
import { useThemeMemo } from '../../theme/'
import { Icon as IconBase } from '@avito/icons'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { IconProps } from './contract'
import { createIconTheme, IconTheme } from './theme'

const spinAnimation = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`

// Вложенная анимация это хак, из-за того что в safari вращение происходит не по центру при абсолютном позиционировании элемента
const iconClassName = createClassName<IconProps, IconTheme>(
  (themeStyle, props) => ({
    display: 'inline-block',
    ...themeStyle,
    ...props,
  }),
  (textRules, { spin }) => css`
    ${spin ? css`
      & > * {
        animation: ${spinAnimation} ${typeof spin === 'boolean' ? 0.5 : spin}s linear infinite;
        transform-origin: center;
      }
    ` : ''}
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    
    ${textRules}
  `
)

const Icon = ({ override, ...props }: IconProps) => {
  const [theme, iconTheme] = useThemeMemo(createIconTheme, override)

  const { Icon } = foldThemeParams(props, iconTheme)
  const iconStyle = iconClassName(props, theme, Icon.style)
  const size = Icon.props.size || props.size

  return (
    <IconBase
      css={iconStyle}
      name={props.name}
      size={size}
      area={props.area}
      onClick={props.onClick}
    />
  )
}

export default Icon