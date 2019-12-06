import React from 'react'
import { useTheme } from '../../utils/'
import { RadioProps } from './contract'
import { createClassName, foldThemeParams } from '../../styled-system'
import { Toggler } from '../Toggler'
import { RadioTheme } from './theme'

const radioClassName = createClassName<RadioProps, RadioTheme>(
  (themeParams, props) => ({
    display: 'inline',
    ...themeParams && themeParams.Radio.style,
    ...props,
  }),
  (textRules, {}, {}) => (`
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border: 7px solid;
    border-radius: 100%;
    
    ${textRules}
  `),
)

const Radio = (props: RadioProps) => {
  const theme = useTheme()
  const themeParams = foldThemeParams<RadioTheme>(theme.radio, props)
  const style = radioClassName(props, theme, themeParams)

  return (
    <Toggler
      mode='radio'
      className={style}
      { ...props }>
    </Toggler>
  )
}

Radio.defaultProps = {
  variant: 'primary',
}

export default Radio