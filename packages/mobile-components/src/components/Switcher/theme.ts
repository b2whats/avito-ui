import { DeepPartial, SwitcherTheme, dsl, Colors, Spinner } from '@avito/core'
import { SwitcherIcon } from '../Icon'

export const switcherTheme: DeepPartial<SwitcherTheme> = {
  defaultProps: {
    shape: 'pill',
  },
  scheme: {
    Switch: {
      style: {
        width: 48,
        height: 25,
        p: 3,
        focus: true,

        color: 'white',
        bg: 'gray12',
        bgActive: 'gray28',
        bgDisabled: 'gray4',
      },
      variant: {
        primary: {
          style: {
            bgDisabled: 'gray8',
          },
        },
      },
      checked: {
        style: {
          bgDisabled: 'gray28',
        },
        variant: dsl.styleMap({
          primary: {
            ...fillStyle('blue500', 'blue700'),
            bgDisabled: 'blue300',
          },
          secondary: fillStyle('gray48', 'gray56'),
          success: fillStyle('green500', 'green700'),
          warning: fillStyle('orange500', 'orange700'),
          error: fillStyle('red500', 'red700'),
        }),
      },
      loading: {
        style: {
          focus: false,
          align: 'center',
          color: 'gray28',
          bg: 'transparent',
          bgActive: 'transparent',
          bgDisabled: 'transparent',
        },
      },
    },
    Icon: {
      component: SwitcherIcon,
      loading: {
        component: Spinner,
      },
    },
  },
}

function fillStyle(bg: Colors, bgActive: Colors) {
  return { bg, bgActive }
}
