import React from 'react'
import { CheckboxProps } from './contract'
import { ToggleBox } from '../ToggleBox'
import { Icon } from '../Icon/'

const Checkbox = ({ ...props }: CheckboxProps) => {
  return (
    <ToggleBox {...props} mode='checkbox' kind='checkbox'>
      {(state) => ({
        true: <Icon name='check' size='auto' />,
        mixed: <Icon name='indeterminate' size='auto' />,
      })[state as string]}
      
    </ToggleBox>
  )
}

export default React.memo(Checkbox)