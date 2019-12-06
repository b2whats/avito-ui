import React from 'react'
import { useTheme } from '../../utils/'
import { SwitcherProps } from './contract'
import { SwitcherTheme } from './theme'
import {createClassName, foldThemeParams } from '../../styled-system'
import { Toggler } from '../Toggler'

const radioClassName = createClassName<SwitcherProps, SwitcherTheme>(
  (themeStyles, props) => ({
    display: 'inline-flex',
    ...themeStyles,
    ...props,
  }),
  (textRules, {}, {}) => (`
    position: relative;
    width: 48px;
    height: 24px;
    box-sizing: border-box;
    border-radius: 15px;
    
    &::after {
      content: ' ';
      position: absolute;
      top: 3px;
      left: 3px;
      display: block;
      width: 18px;
      height: 18px;
      background-color: white;
      border-radius: 100%;
    }
    
    &[aria-checked=true]::after {
      right: 3px;
      left: auto;
    }
    
    ${textRules}
  `),
)

const Switcher = (props: SwitcherProps) => {
  const theme = useTheme()
  const { Switcher } = foldThemeParams<SwitcherTheme>(theme.switcher, props)
  const style = radioClassName(props, theme, Switcher.style)

  return (
    <Toggler
      mode='switcher'
      className={style}
      { ...props }>
    </Toggler>
  )
}

export default Switcher