import React from 'react'
import { useTheme, mergeTheme } from '@avito/core/theme/'
import { foldThemeParams } from '@avito/core/styled-system/'
import { Icon } from '../Icon/'
import { SpinnerProps } from './contract'
import { spinnerTheme } from './theme'

const Spinner = ({ speed, override, ...props }: SpinnerProps) => {
  const theme = useTheme()
  const componentTheme = mergeTheme(spinnerTheme, theme.Spinner, override)

  const { Icon: IconComponent } = foldThemeParams(props, componentTheme)

  return (
    <Icon name='spinner'  {...IconComponent.props} {...props} spin={speed || true} />
  )
}

export default Spinner