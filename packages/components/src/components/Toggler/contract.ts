import React from 'react'

export interface TogglerProps {
  className?: object,
  mode?: 'checkbox' | 'radio' | 'switcher' | 'checkmark' | string, /* можно расширять без изменения Toggler */

  id?: string,
  name?: string,
  checked?: boolean,
  defaultChecked?: boolean,
  disabled?: boolean,
  value?: string | boolean,

  onChange?: void,
  onFocus?: void,
  onBlur?: void,
  onClick?: void,

  children?: React.ReactNode
}