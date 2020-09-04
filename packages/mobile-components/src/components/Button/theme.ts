import { ButtonTheme, dsl, StyleProperties } from '@avito/core'

const fillTheme = (hue: string): StyleProperties => ({
  bg: `${hue}500`,
  bgHover: `${hue}600`,
  bgActive: `${hue}700`,
  bgDisabled: 'gray4',
  colorDisabled: 'gray48',
  focus: `${hue}100`,
})

export const buttonTheme = dsl.theme<ButtonTheme>()
  .defaultProps({
    preset: 'primary',
  })
  .slot('Text', {
    dense: true,
  })
  .slot('Button', slot => [
    slot.switch('preset', {
      primary: {
        color: 'white',
        colorDisabled: 'blue50',
        bg: 'blue500',
        bgActive: 'blue600',
        bgChecked: 'blue600',
        bgDisabled: 'blue300',
      },
      accent: {
        color: 'white',
        colorDisabled: 'gray48',
        bg: 'green500',
        bgActive: 'green600',
        bgDisabled: 'gray4',
      },
      secondary: {
        color: 'blue500',
        colorDisabled: 'gray48',
        bg: 'blue50',
        bgActive: 'blue100',
        bgDisabled: 'gray4',
      },
      default: [
        {
          color: 'black',
          colorDisabled: 'gray48',
          bg: 'gray4',
          bgActive: 'gray8',
          bgDisabled: 'gray4',
        },
        slot.if('checked', {
          color: 'white',
          colorDisabled: 'blue50',
          bg: 'blue500',
          bgActive: 'blue800',
          bgDisabled: 'blue300',
        }),
      ],
      defaultOnSurface: {
        color: 'black',
        colorDisabled: 'gray48',
        bg: 'gray8',
        bgActive: 'gray12',
        bgDisabled: 'gray8',
      },
      defaultDark: {
        color: 'white',
        colorDisabled: 'gray40',
        bg: 'gray68',
        bgActive: 'gray76',
        bgDisabled: 'gray76',
      },
      outline: {
        color: 'black',
        colorDisabled: 'gray48',
        bg: 'white',
        borderColor: 'gray8',
        bgActive: 'gray8',
      },
      pay: {
        color: 'white',
        colorDisabled: 'gray40',
        bg: 'black',
        bgActive: 'gray76',
        bgDisabled: 'gray68',
      },
      appInstall: {
        color: 'blue500',
        colorDisabled: 'gray48',
        bg: 'gray4',
        bgActive: 'gray8',
        bgDisabled: 'gray4',
      },
      linkIncreased: {
        color: 'blue500',
        colorDisabled: 'gray40',
        bg: 'transparent',
        bgActive: 'gray4',
        bgDisabled: 'white',
      },
    }),
    slot.switch('kind', {
      fill: [
        {
          color: 'white',
          bg: 'blue500',
          bgActive: 'blue600',
          bgChecked: 'blue600',
          bgDisabled: 'blue300',
        },
        slot.switch('variant', {
          primary: {
            ...fillTheme('blue'),
          },
          secondary: {
            bg: 'gray8',
            bgHover: 'gray12',
            bgActive: 'gray20',
            bgDisabled: 'gray8',
            color: 'black',
            focus: 'blue100',
          },
          success: {
            ...fillTheme('green'),
          },
          warning: {
            ...fillTheme('orange'),
            color: 'black',
          },
          error: {
            ...fillTheme('red'),
          },
        }),
      ],
      outline: [
        {
          borderColor: 'gray32',
          borderColorHover: 'gray40',
          borderColorActive: 'gra52',
          borderColorDisabled: 'gray24',
          bg: 'gray32',
          bgHover: 'gray40',
          bgActive: 'gray52',
          bgChecked: 'gray32',
        },
        slot.switch('variant', {
          primary: [
            {
              color: 'blue500',
              colorHover: 'blue600',
              colorActive: 'blue700',
              colorDisabled: 'blue300',
            },
            slot.if('checked', {
              color: 'red500',
              colorHover: 'red600',
              colorActive: 'red700',
              colorDisabled: 'red300',
              bg: 'red300',
            }),
          ],
          secondary: {
            color: 'gray50',
            colorHover: 'gray60',
            colorActive: 'gray70',
            colorDisabled: 'gray30',
          },
          success: {
            color: 'green50',
            colorHover: 'green60',
            colorActive: 'green70',
            colorDisabled: 'green30',
          },
          warning: {
            color: 'yellow50',
            colorHover: 'yellow60',
            colorActive: 'yellow70',
            colorDisabled: 'yellow30',
          },
          error: {
            color: 'red50',
            colorHover: 'red60',
            colorActive: 'red70',
            colorDisabled: 'red30',
          },
        }),
      ],
      flat: [
        {
          borderColor: 'gray30',
          borderColorHover: 'gray40',
          borderColorActive: 'gra50',
          borderColorDisabled: 'gray20',
          bg: 'gray30',
          bgHover: 'gray40',
          bgActive: 'gray50',
          bgChecked: 'gray30',
        },
        slot.switch('variant', {
          primary: {
            color: 'blue50',
            colorHover: 'blue60',
            colorActive: 'blue70',
            colorDisabled: 'blue30',
          },
          secondary: {
            color: 'gray50',
            colorHover: 'gray60',
            colorActive: 'gray70',
            colorDisabled: 'gray30',
          },
          success: {
            color: 'green50',
            colorHover: 'green60',
            colorActive: 'green70',
            colorDisabled: 'green30',
          },
          warning: {
            color: 'yellow50',
            colorHover: 'yellow60',
            colorActive: 'yellow70',
            colorDisabled: 'yellow30',
          },
          error: {
            color: 'red50',
            colorHover: 'red60',
            colorActive: 'red70',
            colorDisabled: 'red30',
          },
        }),
      ],
    }),
  ])
  .build()
