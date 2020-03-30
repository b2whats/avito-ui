import React from 'react'
import { useThemeMemo } from '../../theme/'
import { foldThemeParams } from '../../styled-system/'
import { Icon } from '../Icon/'
import { SpinnerProps } from './contract'
import { createSpinnerTheme } from './theme'

const Spinner = ({ speed, override, ...props }: SpinnerProps) => {
  const [_, spinnerTheme] = useThemeMemo(createSpinnerTheme, override)

  const { Icon: IconComponent } = foldThemeParams(props, spinnerTheme)

  return (
    <Icon name='spinner'  {...IconComponent.props} {...props} spin={speed || true} />
  )
}

export default Spinner