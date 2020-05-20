import { DeepPartial, ToggleTheme, dsl, Colors } from '@avito/core'

export const toggleTheme: DeepPartial<ToggleTheme> = {
  scheme: {
    Label: {
      props: {
        size: p =>  p.size,
        valignSelf: 'middle',
      },
      labelPosition: {
        start: {
          props: {
            mr: p => p.size === 's' ? 6 : 8,
          },
        },
        end: {
          props: {
            ml: p => p.size === 's' ? 6 : 8,
          },
        },
      },
      disabled: {
        props: {
          color: 'gray40',
        },
      },
    },
    Switch: {
      style: {
        bg: 'white',
        colorDisabled: 'gray4',
        borderColorDisabled: 'gray20',
        borderStyle: 'solid',
        borderWidth: 1,
        focus: true,
      },
      variant: dsl.styleMap({
        primary: outline('gray20', 'gray28'),
        secondary: outline('gray4', 'gray10'),
        success: outline('green500', 'green600'),
        warning: outline('orange500', 'orange600'),
        error: outline('red500', 'red600'),
      }),
      checked: {
        style: {
          bgDisabled: 'gray20',
        },
        variant: dsl.styleMap({
          primary: fill('blue500', 'blue600'),
          secondary: fill('blue500', 'blue600'),
          success: fill('green500', 'green600'),
          warning: fill('orange500', 'orange600'),
          error: fill('red500', 'red600'),
        }),
      },
    },
  },
}

function outline(borderBase: Colors, bgHover: Colors) {
  return {
    borderColor: borderBase,
    borderColorHover: bgHover,
  }
}

function fill(bg: Colors, hover: Colors) {
  return {
    bg,
    borderColor: bg,
    bgHover: hover,
    borderColorHover: hover,
  }
}