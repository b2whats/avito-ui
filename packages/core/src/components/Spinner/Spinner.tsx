import React from 'react'
import { avitoComponent } from '../../theme/'
import { foldThemeParams } from '../../styled-system/'
import { SpinnerProps } from './contract'
import { spinnerTheme } from './theme'

const Spinner = avitoComponent('Spinner', spinnerTheme)(({ speed, override, ...props }: SpinnerProps, { theme }) => {
  const { Spinner } = foldThemeParams(props, theme)
  return (
    <Spinner.component {...Spinner.props} {...props} spin={speed || true} />
  )
})

export default Spinner
