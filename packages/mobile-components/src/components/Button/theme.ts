import { ButtonTheme, dsl } from '@avito/core'

export const buttonTheme = dsl.theme<ButtonTheme>()
  .defaultProps({
    preset: 'primary',
  })
  .slot('Text', slot => [{
    dense: true,
  }, slot.if(props => props.kind === 'fill', {
    uppercase: true,
  })])
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
        bgActive: 'green800',
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
        bg: 'white',
        bgActive: 'gray4',
        bgDisabled: 'white',
      },
    }),
    slot.switch('kind', {
      fill: [
        {
          bg: 'blue50',
          bgHover: 'blue60',
          bgActive: 'blue70',
          bgChecked: 'blue70',
          bgDisabled: 'blue30',
          color: 'white',
          colorDisabled: 'gray30',
        },
        slot.switch('variant', {
          primary: {
            bg: 'blue50',
            bgHover: 'blue60',
            bgActive: 'blue70',
            bgChecked: 'blue70',
            bgDisabled: 'blue30',
          },
          secondary: {
            bg: 'gray50',
            bgHover: 'gray60',
            bgActive: 'gray70',
            bgChecked: 'gray70',
            bgDisabled: 'gray30',
            color: 'black',
            colorDisabled: 'gray70',
          },
          success: {
            bg: 'green50',
            bgHover: 'green60',
            bgActive: 'green70',
            bgChecked: 'green70',
            bgDisabled: 'green30',
          },
          warning: {
            bg: 'yellow50',
            bgHover: 'yellow60',
            bgActive: 'yellow70',
            bgChecked: 'yellow70',
            bgDisabled: 'yellow30',
            color: 'black',
            colorDisabled: 'gray70',
          },
          error: {
            bg: 'red50',
            bgHover: 'red60',
            bgActive: 'red70',
            bgChecked: 'red70',
            bgDisabled: 'red30',
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
