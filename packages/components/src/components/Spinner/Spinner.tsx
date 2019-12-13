import React from 'react'
import { useTheme } from '../../utils/'
import { foldThemeParams } from '../../styled-system/'
import { Icon } from '../Icon/'
import { SpinnerProps } from './contract'
import { SpinnerTheme } from './theme'

const Spinner = ({ speed, ...props }: SpinnerProps) => {
  const theme = useTheme()

  const { Spinner } = foldThemeParams<SpinnerTheme>(theme.spinner, props)

  return (
    <Icon name='spinner' {...Spinner.props} {...props} spin={speed || true} />
  )
}

export default Spinner