import React from 'react'
import { useTheme } from '../../utils/'
import { Icon as IconBase } from '@avito/icons'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { IconProps } from './contract'
import { IconTheme } from './theme'

const iconClassName = createClassName<IconProps, IconTheme>(
  (style, props) => ({
    display: 'inline-block',
    ...style,
    ...props,
  }),
  (textRules) => (`${textRules}`)
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