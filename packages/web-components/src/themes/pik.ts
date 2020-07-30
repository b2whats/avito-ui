import { Theme, dsl, DeepPartial, StyleProperties, Colors } from '@avito/core'
import { CrossIcon } from '@avito/core/icons'

declare module '@avito/core' {
  enum InputPreset { inverse }
}

const textControlTheme = dsl.fragment<
  Theme['Input']['scheme']['Input'] |
  Theme['Textarea']['scheme']['Textarea']
>(slot => [
  {
    style: {
      placeholderColor: 'gray44',
      borderWidth: 1,
      borderRadius: 4,
      bgFocus: 'white',
      focus: false,
      px: 16,
    },
  },
  slot.switch('variant', dsl.styleMap({
    primary: pikInput('gray4', 'gray16'),
    secondary: pikInput('gray8', 'gray20'),
    error: pikInput('red50', 'red300'),
    warning: pikInput('orange50', 'orange300'),
    success: pikInput('green50', 'green300'),
  })),
  slot.if(props => props.preset === 'inverse' && props.variant === 'primary', {
    style: {
      bg: 'white',
      bgDisabled: 'white',
      borderColor: 'white',
    },
  }),
])

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
    // yes it does not support dense
    .slot('Text', slot => ({
      style: {
        lineHeight: slot.mapped('size', {
          xs: 1.23,
          s: 1.43,
          m: 1.5,
          l: 1.4,
          xl: 1.34,
          xxl: 1.25,
          xxxl: 1.2,
        }),
      },
    }))
    .build(),
  Button: dsl.theme<Theme['Button']>()
    .defaultProps({
      size: 'm',
      pressedOffset: 0,
    })
    .slot('Button', slot => [
      {
        style: {
          borderRadius: 4,
          px: props => props.size === 'l' ? 36 : 24,
        },
      },
      slot.if(props => props.size === 'l' && props.multiline, {
        style: {
          minWidth: 290,
          px: 48,
          height: 64,
        },
      }),
      slot.switch('preset', {
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
      }),
    ])
    .build(),
  Input: dsl.theme<Theme['Input']>()
    .defaultProps({
      size: 'm',
    })
    .slot('Input', textControlTheme)
    .slot('IconAfter', slot => [
      slot.if('clearable', {
        component: CrossIcon,
      }),
    ])
    .build(),
  Select: dsl.theme<Theme['Select']>()
    .slot('Input', {
      style: {
        pr: 11,
      },
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
