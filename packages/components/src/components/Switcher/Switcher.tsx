import React from 'react'
import { css } from '@emotion/core'
import { Toggle } from '../Toggle/'
import { Icon } from '../Icon/'
import { Spinner } from '../Spinner/'
import { SwitcherProps } from './contract'

const circleStyle = (checked: boolean, press: boolean) => css`
  display: flex;
  height: 100%;
  width: 100%;

  &::before {
    content: '';
    transition: flex-basis .2s ease;
    flex-basis: ${(
      !checked && press ? '15%' :
      checked ? '100%' : '0%')};
  }
  &::after {
    content: '';
    transition: flex-basis .2s ease;
    flex-basis: ${(
      checked && press ? '15%' :
      !checked ? '100%' : '0%')};
  }
`

const Switcher = (props: SwitcherProps) => {
  props = {
    variant: 'primary',
    size: 'm',
    shape: 'pill',
    ...props,
  }

  return (
    <Toggle {...props} mode='checkbox' scheme='switcher'>
      {({ state, press, loading }) => (loading
        ? <Spinner size='auto'/>
        : (
          <div css={circleStyle(!!state, press)}>
            <Icon name='circle' size='auto' />
          </div>
        )
      )}
    </Toggle>
  )
}

export default Switcher
