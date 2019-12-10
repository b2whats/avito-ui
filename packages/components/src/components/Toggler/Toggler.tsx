import React, { useState } from 'react'
import { TogglerProps } from './contract'
import { createClassName } from '../../styled-system/'

const defaultType = 'checkbox'
const typeByMode = {
  'radio': 'radio',
  'checkbox': 'checkbox',
  'checkmark': defaultType,
  'switcher': defaultType,
}

const togglerClassName = createClassName<TogglerProps>(
  () => ({ display: 'inline-flex' }),
  (textProps, {}, {}) => (`
    position: relative;
    cursor: pointer;
    
    & input {
      position: absolute;
      opacity: 0;
    }
    
    ${textProps}
  `),
)

const Toggler = (props: TogglerProps) => {
  const { checked, disabled, mode, className, children, ...params } = props
  const style = togglerClassName(props, {})

  return (
    <label css={[style, className]} aria-checked={checked} aria-disabled={disabled} disabled={disabled}>
      { children }
      <input {...params} type={typeByMode[mode || defaultType]} />
    </label>
  )
}

export default Toggler