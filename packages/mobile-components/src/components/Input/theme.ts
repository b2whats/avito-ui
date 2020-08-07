import { InputTheme, dsl } from '@avito/core'

export const inputTheme = dsl.theme<InputTheme>()
  .defaultProps({
    kind: 'fill',
  })
  .slot('IconBefore', {
    ml: 10,
    mr: 8,
  })
  .slot('IconAfter', slot => ({
    mx: slot.mapped('size', { s: 8, m: 10, l: 10 }),
  }))
  .slot('Prefix', {
    mr: 4,
  })
  .slot('InputField', slot => [
    {
      px: slot.mapped('size', { s: 12, m: 16, l: 16 }),
    },
    slot.if('iconBefore', {
      pl: 'none',
    }),
    slot.if('iconAfter', {
      pr: 'none',
    }),
  ])
  .slot('Input', slot => ({
    borderRadius: 5,
    color: 'black',
    colorDisabled: 'gray40',
    placeholderColor: 'gray48',
    fontSize: slot.mapped('size', { s: 12, m: 16, l: 16 }),
    bg: slot.mapped('variant', {
      primary: 'gray4',
      secondary: 'gray8',
      success: 'green50',
      warning: 'orange50',
      error: 'red50',
    }),
  }))
  .build()
