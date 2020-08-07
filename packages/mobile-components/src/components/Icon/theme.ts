import { IconTheme, dsl } from '@avito/core'

export const iconTheme = dsl.theme<IconTheme>()
  .mapProps(({ onClick }) => ({
    ...onClick && { area: 6 },
  }))
  .defaultProps({
    size: 'm',
  })
  .slot('Icon', slot => ({
    color: slot.mapped('variant', {
      primary: 'blue500',
      secondary: 'gray52',
      error: 'red500',
      success: 'green500',
      warning: 'yellow500',
    }),
  }))
  .build()
