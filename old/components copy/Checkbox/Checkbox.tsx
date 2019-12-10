import React from 'react'
import { CheckboxProps } from './contract'
import { ToggleBox } from '../ToggleBox'
import { Icon } from '../../../packages/components/src/components/Icon'
import { createClassName } from '../../styled-system'
import {useTheme} from '../../util'

const togglerClassName = createClassName<CheckboxProps>(
  () => ({ display: 'inline-flex' }),
  (textRules, {}, { palette }) => (`
    backgraund: blue;
    width: 24px;
    height: 24px;
  `),
)

const Checkbox = ({ ...props }: CheckboxProps) => {
  const theme = useTheme()
  const style = togglerClassName(props, theme)

  return (
    <ToggleBox {...props} mode='checkbox' kind='checkbox' css={style}>
      {(state) => ({
        true: <Icon name='check' size='auto' />,
        mixed: <Icon name='indeterminate' size='auto' />,
      })[state as string]}
      
    </ToggleBox>
  )
}

export default React.memo(Checkbox)