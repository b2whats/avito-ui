import React from 'react'
import { css } from '@emotion/core'
import { useThemeMemo } from '../../theme/'
import { Toggle } from '../Toggle'
import { Icon } from '../Icon'
import { Spinner } from '../Spinner'
import { SwitcherProps } from './contract'
import { createSwitcherTheme } from './theme'

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
  const [_, switcherTheme] = useThemeMemo(createSwitcherTheme, override)

  props = {
    variant: 'primary',
    size: 'm',
    shape: 'pill',
    ...props,
  }

  return (
    <Toggle css={circleStyle} {...props} mode='checkbox' override={switcherTheme}>
      {({ loading }) => (loading
        ? <Spinner size='auto' />
        : <Icon name='circle' size='auto' />
      )}
    </Toggle>
  )
}

export default Switcher
