import React from 'react'
import { uiComponent } from '../../theme/'
import { foldThemeParams } from '../../styled-system/'
import { SpinnerProps } from './contract'
import { spinnerTheme } from './theme'

export const Spinner = uiComponent('Spinner', spinnerTheme)(({ speed, ...props }: SpinnerProps, { theme }) => {
  const { Spinner } = foldThemeParams(props, theme)
  return (
    <Spinner.component {...Spinner.props} {...props} spin={speed || true} />
  )
})
