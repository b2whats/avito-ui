import React from 'react'
import { useTheme } from '../../utils/'
import { Icon as IconBase } from '@avito/icons'
import { getThemeStyle } from '../../styled-system/'
import { IconProps } from './contract'

const Icon = ({ size, name, ...props }: IconProps) => {
  const theme = useTheme()

  const style = getThemeStyle(theme, 'icon', props, {
    Icon: { ...props, display: 'inline-block' },
  })

  return (
    <IconBase css={style.Icon} name={name} size={size} onClick={props.onClick}/>
  )
}

export default Icon