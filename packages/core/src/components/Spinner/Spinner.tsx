import React from 'react'
import { useTheme, mergeTheme } from '../../theme/'
import { foldThemeParams } from '../../styled-system/'
import { SpinnerProps } from './contract'
import { spinnerTheme } from './theme'

const Spinner = ({ speed, override, ...props }: SpinnerProps) => {
  const theme = useTheme()
  const componentTheme = mergeTheme(spinnerTheme, theme.Spinner, override)

  const { Spinner } = foldThemeParams(props, componentTheme)

  return (
    <Spinner.component {...Spinner.props} {...props} spin={speed || true} />
  )
}

export default Spinner