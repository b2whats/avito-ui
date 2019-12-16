import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from '../../utils'
import { Toggle } from '../Toggle/'
import { Icon } from '../Icon/'
import { Spinner } from '../Spinner/'
import { SwitcherProps } from './contract'

const circleStyle = (checked: boolean, active: boolean) => css`
  display: flex;
  height: 100%;
  width: 100%;

  &::before {
    content: '';
    transition: width .2s ease;
    width: ${(
      !checked && active ? '15%' :
      checked ? '100%' : '0%')};
  }
  &::after {
    content: '';
    transition: width .2s ease;
    width: ${(
      checked && active ? '15%' :
      !checked ? '100%' : '0%')};
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
    <Toggle {...props} mode='checkbox' override={theme.switcher}>
      {({ checked, active, loading }) => (loading
        ? <Spinner size='auto'/>
        : (
          <div css={circleStyle(Boolean(checked), active)}>
            <Icon name='circle' size='auto' />
          </div>
        )
      )}
    </Toggle>
  )
}

export default Switcher
