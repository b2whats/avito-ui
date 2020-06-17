import { DeepPartial, ToggleTheme, dsl, Colors } from '@avito/core'
import { controlOutlineVariants } from '../../utils'

export const toggleTheme: DeepPartial<ToggleTheme> = {
  defaultProps: {
    size: 's',
  },
  scheme: {
    Label: {
      props: {
        size: props => props.size,
        valignSelf: 'middle',
      },
      labelPosition: {
        start: {
          props: {
            mr: props => props.size === 's' ? 6 : 8,
          },
        },
        end: {
          props: {
            ml: props => props.size === 's' ? 6 : 8,
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
      variant: controlOutlineVariants,
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
    Toggle: {
      style: {
        cursor: 'pointer',
      },
    },
  },
}

function fill(bg: Colors, hover: Colors) {
  return {
    bg,
    borderColor: bg,
    bgHover: hover,
    borderColorHover: hover,
  }
}
