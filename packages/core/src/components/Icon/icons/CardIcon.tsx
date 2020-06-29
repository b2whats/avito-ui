import React from 'react'
import { Icon, IconProps } from '../'

export const CardIcon = (props: IconProps) => (
  <Icon {...props} viewBox='0 0 24 24' name='card'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22 8H2V5.282c0-.446.046-.607.134-.77a.909.909 0 01.378-.378c.163-.088.324-.134.77-.134h17.436c.446 0 .608.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77V8zm0 3v7.718c0 .446-.046.608-.134.77a.908.908 0 01-.378.378c-.162.088-.324.134-.77.134H3.282c-.446 0-.607-.046-.77-.134a.908.908 0 01-.378-.378c-.088-.162-.134-.324-.134-.77V11h20z'
    />
  </Icon>
)

CardIcon.platform = 'mobile'
