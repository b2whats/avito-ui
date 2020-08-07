import React from 'react'
import { uiComponent, foldThemeParams } from '@avito/core'
import { CheckmarkProps } from './contract'
import { checkmarkTheme } from './theme'

export const Checkmark = uiComponent('Checkmark', checkmarkTheme)((props: CheckmarkProps, { theme }) => {
  const { Icon } = foldThemeParams(props, theme)
  return <Icon.component visible={Boolean(props.checked)} {...Icon} {...props} />
})
