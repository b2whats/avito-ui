import { RadioTheme, dsl, Colors } from '@avito/core'

export const radioTheme = dsl.theme<RadioTheme>()
  .slot('Switch', slot => [
    {
      bg: 'gray8',
      bgActive: 'gray12',
      bgDisabled: props => props.checked ? 'gray28' : 'gray4',
      height: 18,
      focus: false,
      mx: 1,
    },
    slot.if('checked', [
      slot.switch('variant', {
        primary: fillStyle('blue500', 'blue700'),
        secondary: fillStyle('gray48', 'gray56'),
        success: fillStyle('green500', 'green700'),
        warning: fillStyle('orange500', 'orange700'),
        error: fillStyle('red500', 'red700'),
      }),
    ]),
  ])
  .build()

function fillStyle(bg: Colors, bgActive: Colors) {
  return { bg, bgActive }
}
