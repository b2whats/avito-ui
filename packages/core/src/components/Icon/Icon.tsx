import React from 'react'
import { useTheme, mergeTheme } from '@avito/core/theme/'
import { Icon as IconBase } from '@avito/icons'
import { css, keyframes, foldThemeParams, createClassName } from '../../styled-system/'
import { IconProps } from './contract'
import { iconTheme } from './theme'

const spinAnimation = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`

// Вложенная анимация это хак, из-за того что в safari вращение происходит не по центру при абсолютном позиционировании элемента
const iconClassName = createClassName<IconProps, typeof iconTheme>(
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

export const Icon = ({ override, ...props }: IconProps) => {
  const theme = useTheme()
  const componentTheme = mergeTheme(iconTheme, theme.Icon, override)

  const { Icon } = foldThemeParams(props, componentTheme)
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