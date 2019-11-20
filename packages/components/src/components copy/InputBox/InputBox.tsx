import React, { useEffect } from 'react'
import { styled, useTheme, pick, useRefHook, foldPreset } from '../../utils'
import { css } from '@emotion/core'
import { InputBoxProps } from './contract'
import { useGroupHook } from '../../components/Layout/Group'
import { Variants } from '../Variants'

const InputBox = ({ className, ...props }: InputBoxProps) => {
  const theme = useTheme()

  const presetContainer = foldPreset(theme.inputBox.preset.Container, props)
  const containerProps = pick(props, 'm', 'mx', 'my', 'mt', 'mr', 'mb', 'ml', 'p', 'px', 'py', 'pt', 'pr', 'pb', 'pl', 'size', 'disabled')

  const presetStyledBox = foldPreset(theme.inputBox.preset.StyledBox, props)

  return (
    <Variants {...presetContainer} {...containerProps} as='label' className={className} position='relative'>
      <input type='text'/>
      <Variants {...presetStyledBox} adjacentSelector='*' position='absolute' top={0} right={0} bottom={0} left={0} borderRadius='inherit'/>
    </Variants>
  )
}

InputBox.defaultProps = {
  size: 'm',
  variant: 'primary',
}

export default InputBox