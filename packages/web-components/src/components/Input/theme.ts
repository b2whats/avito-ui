import { DeepPartial, InputTheme, dsl } from '@avito/core'
import { CrossIcon } from '../Icon/'

const gapSize = {
  s: 7,
  m: 10,
  l: 12,
}

export const inputTheme: DeepPartial<InputTheme> = {
  defaultProps: {
    size: 's',
    kind: 'outline',
  },
  scheme: {
    IconBefore: {
      size: dsl.propMap('mr', gapSize),
    },
    IconAfter: {
      size: dsl.propMap({
        s: {
          ml: gapSize.s,
          size: 'm',
        },
        m: {
          ml: gapSize.m,
          size: 'm',
        },
        l: {
          ml: gapSize.l,
          size: 'l',
        },
      }),
      clearable: {
        component: CrossIcon,
      },
    },
    Prefix: {
      size: dsl.propMap('mr', {
        s: 4,
        m: 6,
        l: 8,
      }),
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
        cursor: 'text',
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
