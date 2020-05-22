import React from 'react'
import { css } from '../../styled-system/'
import { uiComponent } from '../../theme/'
import { Toggle } from '../Toggle/'
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

const Switcher = uiComponent('Switcher', switcherTheme)((props: SwitcherProps, { theme }) => {
  return (
    <Toggle css={circleStyle} {...props} mode='checkbox' override={theme}>
      {({ loading, Icon }) => (loading
        ? <Spinner size='auto' />
        : Icon && <Icon.component {...Icon.props} size='auto' />
      )}
    </Toggle>
  )
})

export default Switcher
