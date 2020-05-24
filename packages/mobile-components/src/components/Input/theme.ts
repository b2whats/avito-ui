import { DeepPartial, InputTheme, dsl } from '@avito/core'

export const inputTheme: DeepPartial<InputTheme> = {
  defaultProps: {
    kind: 'fill',
  },
  scheme: {
    IconBefore: {
      props: {
        ml: 10,
        mr: 8,
      },
    },
    IconAfter: {
      size: dsl.propMap('mx', {
        s: 8,
        m: 10,
        l: 10,
      }),
    },
    Prefix: {
      props: {
        mr: 4,
      },
    },
    InputField: {
      size: dsl.styleMap('px', {
        s: 12,
        m: 16,
        l: 16,
      }),
      iconBefore: {
        style: {
          pl: 'none',
        },
      },
      iconAfter: {
        style: {
          pr: 'none',
        },
      },
    },
    Input: {
      style: {
        borderRadius: 5,
        color: 'black',
        colorDisabled: 'gray40',
        placeholderColor: 'gray48',
      },
      size: dsl.styleMap('fontSize', {
        s: 12,
        m: 16,
        l: 16,
      }),
      variant: dsl.styleMap('bg', {
        primary: 'gray4',
        secondary: 'gray8',
        success: 'green50',
        warning: 'orange50',
        error: 'red50',
      }),
    },
  },
}
