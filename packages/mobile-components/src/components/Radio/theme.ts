import { DeepPartial, RadioTheme, dsl, Colors } from '@avito/core'

export const radioTheme: DeepPartial<RadioTheme> = {
  scheme: {
    Switch: {
      style: {
        bg: 'gray8',
        bgActive: 'gray12',
        height: 18,
        focus: false,
        mx: 1,
      },
      checked: {
        style: {
          bgDisabled: 'gray28',
        },
        variant: dsl.styleMap({
          primary: fillStyle('blue500', 'blue700'),
          secondary: fillStyle('gray48', 'gray56'),
          success: fillStyle('green500', 'green700'),
          warning: fillStyle('orange500', 'orange700'),
          error: fillStyle('red500', 'red700'),
        }),
      },
    },
  },
}

function fillStyle(bg: Colors, bgActive: Colors) {
  return { bg, bgActive }
}
