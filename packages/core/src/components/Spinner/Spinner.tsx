import React from 'react'
import { foldThemeParams } from '../../styled-system/'
import { uiComponent } from '../../theme/'
import { SpinnerProps } from './contract'
import { spinnerTheme } from './theme'

export const Spinner = uiComponent('Spinner', spinnerTheme)(({ speed, ...props }: SpinnerProps, { theme, testId }) => {
  const { Spinner } = foldThemeParams(props, theme)
  return (
    <Spinner.component role='progressbar' {...Spinner.props} {...props} spin={speed || true} {...testId()} />
  )
})
