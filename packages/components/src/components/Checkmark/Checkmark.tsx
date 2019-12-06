import React from 'react'
import { useTheme } from '../../utils/'
import { CheckmarkProps } from './contract'
import { createClassName, foldThemeParams } from '../../styled-system'
import { Toggler } from '../Toggler'
import { Icon } from '../Icon'
import { CheckmarkTheme } from './theme'

const checkmarkClassName = createClassName<CheckmarkProps, CheckmarkTheme>(
  (themeStyle, props) => ({
    display: 'inline',
    ...themeStyle,
    ...props,
  }),
  (textRules, {}, {}) => (`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    
    & svg {
      position: relative;
      top: -3px;
    }
    
    &[disabled] svg {
      display: none;
    }
    
    &[aria-checked] svg {
      display: inline-block;
    }
    
    ${textRules}
  `),
)

const Checkmark = (props: CheckmarkProps) => {
  const theme = useTheme()
  const { Checkmark } = foldThemeParams<CheckmarkTheme>(theme.checkmark, props)
  const style = checkmarkClassName(props, theme, Checkmark.style)

  return (
    <Toggler
      mode='checkmark'
      className={style}
      { ...props }>
      <Icon name='check' color='white' />
    </Toggler>
  )
}

Checkmark.defaultProps = {
  variant: 'primary',
}

export default Checkmark