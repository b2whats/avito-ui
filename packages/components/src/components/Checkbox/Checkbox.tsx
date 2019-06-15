import React, { useContext, useRef, useEffect, useCallback } from 'react'
import { styled } from '../../utils/'
import { CheckboxProps } from './contract'
import { Toggle } from '../Toggle/'
import { Icon } from '../Icon/'


const CheckboxBox = styled(Toggle)<CheckboxProps>`
  ${({ theme: { checkbox } }) => `
    border-radius: ${checkbox.borderRadius};
    border-width: ${checkbox.borderWidth};
    border-style: solid;
    width: 1em;
    height: 1em;

  `}
`

const Checkbox = ({ ...props }: CheckboxProps) => {
  return (
    <CheckboxBox {...props} mode='checkbox'>
      {(state) => ({
        true: <Icon name='check' size='0.8em'/>,
        mixed: <Icon name='indeterminate' size='0.8em'/>,
      })[state as string]}
    </CheckboxBox>
  )
}

export default Checkbox