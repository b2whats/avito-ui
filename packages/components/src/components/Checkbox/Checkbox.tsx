import React from 'react'
import { useTheme } from '../../utils/'
import { CheckboxProps } from './contract'
import { createClassName, foldThemeParams} from '../../styled-system'
import { Toggler } from '../Toggler'
import { Icon } from '../Icon'
import { CheckboxTheme } from './theme'

const checkboxClassName = createClassName<CheckboxProps, CheckboxTheme>(
  (themeStyle, props) => ({
    display: 'inline',
    ...themeStyle,
    ...props,
  }),
  (textRules) => (`
    width: 18px;
    height: 18px;
    margin: 2px; /* чтобы уравновесть с radio */
    border-radius: 2px;
        
    & svg {
      position: relative;
      top: -4px;
      left: -1px;
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

const Checkbox = (props: CheckboxProps) => {
  const theme = useTheme()
  const { Сheckbox } = foldThemeParams<CheckboxTheme>(theme.checkbox, props)
  const style = checkboxClassName(props, theme, Сheckbox.style)

  return (
    <Toggler
      mode='checkbox'
      className={style}
      { ...props }>
      <Icon name='check' color='white' />
    </Toggler>
  )
}

Checkbox.defaultProps = {
  variant: 'primary',
}

export default Checkbox