import { DeepPartial, InputTheme, dsl } from '@avito/core'

const gapSize = {
  s: 7,
  m: 10,
  l: 12,
}

export const inputTheme: DeepPartial<InputTheme> = {
  defaultProps: {
    kind: 'outline',
  },
  scheme: {
    IconBefore: {
      size: dsl.propMap('mr', gapSize),
    },
    IconAfter: {
      size: dsl.propMap('ml', gapSize),
    },
    Prefix: {
      size: dsl.propMap('mr', gapSize),
    },
    Input: {
      style: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 3,
        color: 'black',
        placeholderColor: 'gray40',
        colorDisabled: 'gray64',
        bgDisabled: 'gray4',
      },
      size: dsl.styleMap({
        s: {
          fontSize: 's',
          px: gapSize.s,
        },
        m: {
          fontSize: 'm',
          px: gapSize.m,
        },
        l: {
          fontSize: 'l',
          px: gapSize.l,
        },
      }),
      variant: dsl.styleMap('borderColor', {
        primary: 'gray20',
        // FIXME: How to style it?
        secondary: 'gray8',
        success: 'green500',
        warning: 'orange500',
        error: 'red500',
      }),
    },
  },
}