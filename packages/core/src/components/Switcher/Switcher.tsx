import React from 'react'
import { css } from '../../styled-system/'
import { useTheme, mergeTheme } from '../../theme/'
import { Toggle } from '../Toggle/'
import { Icon } from '../Icon/'
import { Spinner } from '../Spinner/'
import { SwitcherProps } from './contract'
import { switcherTheme } from './theme'

const circleStyle = () => css`
  &::before {
    transition: width .2s ease .05s;
    width: 0%;
  }

  &::after {
    content: '';
    transition: width .2s ease .05s;
    width: 100%;
  }

  input:active + &::before {
    width: 20%;
  }

  input:checked + &::before {
    width: 100%;
  }

  input:checked + &::after {
    width: 0%;
  }

  input:checked:active + &::after {
    width: 20%;
  }

  [aria-busy='true'] > &&::before,
  [aria-busy='true'] > &&::after {
    width: 0%;
  }
`

const Switcher = ({ override, ...props }: SwitcherProps) => {
  const theme = useTheme()
  const componentTheme = mergeTheme(switcherTheme, theme.Switcher, override)

  props = {
    variant: 'primary',
    size: 'm',
    shape: 'pill',
    ...props,
  }

  return (
    <Toggle css={circleStyle} {...props} mode='checkbox' override={componentTheme}>
      {({ loading }) => (loading
        ? <Spinner size='auto' />
        : <Icon name='circle' size='auto' />
      )}
    </Toggle>
  )
}

export default Switcher
