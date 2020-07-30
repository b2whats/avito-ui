import { Theme, dsl, DeepPartial, StyleProperties, Colors } from '@avito/core'
import { CrossIcon } from '@avito/core/icons'

declare module '@avito/core' {
  enum InputPreset { inverse }
}

const textControlTheme = {
  style: {
    placeholderColor: 'gray44',
    borderWidth: 1,
    borderRadius: 4,
    bgFocus: 'white',
    focus: false,
  },
  variant: dsl.styleMap({
    primary: pikInput('gray4', 'gray16'),
    secondary: pikInput('gray8', 'gray20'),
    error: pikInput('red50', 'red300'),
    warning: pikInput('orange50', 'orange300'),
    success: pikInput('green50', 'green300'),
  }),
  size: dsl.styleMap('px', {
    s: 16,
    m: 16,
    l: 16,
  }),
  preset: {
    inverse: {
      variant: {
        primary: {
          style: {
            bg: 'white',
            bgDisabled: 'white',
            borderColor: 'white',
          },
        },
      },
    },
  },
}

export const pikTheme: DeepPartial<Theme> = {
  font: {
    fontFamily: 'Avito,"Helvetica Neue",Helvetica,sans-serif',
    fontSize: {
      xl: 24,
    },
  },
  dimension: {
    rowHeight: {
      s: 36,
      m: 48,
      l: 56,
    },
  },
  Text: dsl.theme<Theme['Text']>()
    .slot('Text', {
      size: dsl.styleMap('lineHeight', {
        xs: 1.23,
        s: 1.43,
        m: 1.5,
        l: 1.4,
        xl: 1.34,
        xxl: 1.25,
        xxxl: 1.2,
      }),
    })
    .build(),
  Button: dsl.theme<Theme['Button']>()
    .defaultProps({
      size: 'm',
      pressedOffset: 0,
    })
    .slot('Button', {
      style: {
        borderRadius: 4,
      },
      size: {
        s: {
          style: {
            px: 24,
          },
        },
        m: {
          style: {
            px: 24,
          },
        },
        l: {
          style: {
            px: 36,
          },
          multiline: {
            style: {
              minWidth: 290,
              px: 48,
              height: 64,
            },
          },
        },
      },
      preset: {
        default: {
          style: {
            borderColor: 'gray16',
            bgHover: 'gray4',
            bgActive: 'gray8',
          },
        },
        newDefault: {
          style: {
            bg: 'gray4',
            bgHover: 'gray8',
            bgActive: 'gray12',
          },
        },
        warning: {
          style: {
            color: 'white',
          },
        },
      },
    })
    .build(),
  Input: dsl.theme<Theme['Input']>()
    .defaultProps({
      size: 'm',
    })
    .slot('Input', textControlTheme)
    .slot('IconAfter', {
      clearable: {
        component: CrossIcon,
      },
    })
    .build(),
  Select: dsl.theme<Theme['Select']>()
    .slot('Input', {
      size: dsl.styleMap('pr', { s: 11, m: 11, l: 11 }),
    })
    .build(),
  Textarea: dsl.theme<Theme['Textarea']>()
    .defaultProps({
      size: 'm',
    })
    .slot('Textarea', textControlTheme)
    .slot('IconClear', {
      component: CrossIcon,
    })
    .build(),
  Toggle: dsl.theme<Theme['Toggle']>()
    .defaultProps({
      size: 'm',
    })
    .build(),
}

function pikInput(bg: Colors, border: Colors): StyleProperties {
  return {
    bg,
    borderColor: bg,
    borderColorHover: border,
    borderColorFocus: border,
  }
}
