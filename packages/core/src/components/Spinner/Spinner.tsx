import React from 'react'
import { avitoComponent } from '../../theme/'
import { foldThemeParams } from '../../styled-system/'
import { omit } from '../../utils'
import { SpinnerProps } from './contract'
import { spinnerTheme } from './theme'

const Spinner = avitoComponent('Spinner', spinnerTheme)(({ speed, ...props }: SpinnerProps, { theme }) => {
  const { Spinner } = foldThemeParams(props, theme)
  return (
    <Spinner.component {...Spinner.props} {...omit(props, 'override')} spin={speed || true} />
  )
})

export default Spinner
