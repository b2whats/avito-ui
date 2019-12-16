import React from 'react'
import { css, keyframes } from '@emotion/core'
import { useTheme } from '../../utils/'
import { Icon as IconBase } from '@avito/icons'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { IconProps } from './contract'
import { IconTheme } from './theme'

const spinAnimation = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`

const iconClassName = createClassName<IconProps, IconTheme>(
  (themeStyle, props) => ({
    display: 'inline-block',
    ...themeStyle,
    ...props,
  }),
  (textRules, { spin }) => css`
    ${spin ? css`
      animation: ${spinAnimation} ${typeof spin === 'boolean' ? 0.5 : spin}s linear infinite;
    ` : ''}
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    
    ${textRules}
  `
)

const Icon = (props: IconProps) => {
  const theme = useTheme()

  const { Icon } = foldThemeParams<IconTheme>(theme.icon, props)
  const iconStyle = iconClassName(props, theme, Icon.style)
  const size = Icon.props.size || props.size

  return (
    <IconBase
      css={iconStyle}
      name={props.name}
      size={size}
      area={props.area}
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
    />
  )
}

export default Icon