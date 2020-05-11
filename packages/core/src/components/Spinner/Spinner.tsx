import React from 'react'
import { useTheme, mergeTheme } from '../../theme/'
import { foldThemeParams } from '../../styled-system/'
import { SpinnerProps } from './contract'
import { spinnerTheme } from './theme'

const Spinner = ({ speed, override, ...props }: SpinnerProps) => {
  const theme = useTheme()
  const componentTheme = mergeTheme(spinnerTheme, theme.Spinner, override)

  const { Icon } = foldThemeParams(props, componentTheme)

  return (
    <Icon.component {...Icon.props} {...props} spin={speed || true} />
  )
}

export default Spinner