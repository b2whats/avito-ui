import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from '../../utils'
import { Toggle } from '../Toggle/'
import { Icon } from '../Icon/'
import { Spinner } from '../Spinner/'
import { SwitcherProps } from './contract'

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

  [aria-busy='true'] > &::before,
  [aria-busy='true'] > &::after {
    content: none;
  }
`

const Switcher = (props: SwitcherProps) => {
  const theme = useTheme()

  props = {
    variant: 'primary',
    size: 'm',
    shape: 'pill',
    ...props,
  }

  return (
    <Toggle css={circleStyle} {...props} mode='checkbox' override={theme.switcher}>
      {({ loading }) => (loading
        ? <Spinner size='auto' />
        : <Icon name='circle' size='auto' />
      )}
    </Toggle>
  )
}

export default Switcher
