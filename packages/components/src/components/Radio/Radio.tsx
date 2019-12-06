import React from 'react'
import { useTheme } from '../../utils/'
import { RadioProps } from './contract'
import { createClassName, foldThemeParams } from '../../styled-system'
import { Toggler } from '../Toggler'
import { RadioTheme } from './theme'

const radioClassName = createClassName<RadioProps, RadioTheme>(
  (themeStyle, props) => ({
    display: 'inline',
    ...themeStyle,
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
  const { Radio } = foldThemeParams<RadioTheme>(theme.radio, props)
  const style = radioClassName(props, theme, Radio.style)

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