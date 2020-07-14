import React from 'react'
import { variant } from '../../../test'
import { UserIcon } from '../Icon/icons'

export const buttonMock = ({
  buttonPresets,
  boolIcons = false,
}: { buttonPresets: string[], boolIcons?: boolean }) => {
  const icon = boolIcons ? true : <UserIcon />
  return [{
    size: ['s', 'm', 'l'],
    iconBefore: [undefined, icon],
    iconAfter: [undefined, icon],
    children: [undefined, 'text'],
  }, {
    // children: ['text'],
    // kind: ['fill', 'outline', 'flat'],
    // variant,
    // checked: [true, false],
  }, {
    children: ['text'],
    preset: buttonPresets as any,
    checked: [true, false],
    loading: [true, false],
  }]
}
