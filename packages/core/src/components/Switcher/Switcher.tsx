import React from 'react'
import { css } from '../../styled-system/'
import { uiComponent } from '../../theme/'
import { Toggle } from '../Toggle/'
import { SwitcherProps } from './contract'
import { switcherTheme } from './theme'

const circleStyle = (positionLoading?: boolean) => css`
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
    ${positionLoading ? '' : 'width: 0%;'}
  }
`

export const Switcher = uiComponent('Switcher', switcherTheme)<SwitcherProps, HTMLInputElement>((props, { theme }) => {
  return (
    <Toggle css={circleStyle(props.positionLoading)} {...props} mode='checkbox' override={theme}>
      {({ Icon }) => Icon && <Icon.component {...Icon} size='auto' />}
    </Toggle>
  )
})
