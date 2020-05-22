import { DeepPartial, SwitcherTheme, dsl, Box } from '@avito/core'
import { Spinner } from '@avito/core'

export const switcherTheme: DeepPartial<SwitcherTheme> = {
  defaultProps: {
    size: 's',
    shape: 'square',
  },
  scheme: {
    Switch: {
      style: {
        bg: 'gray28',
        bgDisabled: 'gray8',
        bgHover: 'gray40',
        borderWidth: 0,
        p: 2,
        color: 'white',
        borderRadius: 2,
      },
      checked: {
        style: {
          bgDisabled: 'gray20',
        },
      },
      size: dsl.styleMap({
        s: {
          height: 20,
          width: 40,
        },
        m: {
          height: 24,
          width: 48,
        },
        l: {
          height: 28,
          width: 56,
        },
      }),
    },
    Icon: {
      component: Box,
      props: {
        bg: 'white',
        height: 1,
        width: 0.39,
        borderRadius: 2,
      },
      loading: {
        component: Spinner,
        props: {
          width: 1,
          bg: 'transparent',
          color: p => p.checked ? 'white' : 'gray64',
        },
      },
    },
  },
}
