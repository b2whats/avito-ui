import { DeepPartial, CheckboxTheme, dsl } from '@avito/core'
import { CheckboxCheckedIcon, CheckboxIndeterminateIcon } from '../Icon'

export const checkboxTheme: DeepPartial<CheckboxTheme> = {
  scheme: {
    Icon: {
      checked: {
        component: CheckboxCheckedIcon,
      },
      indeterminate: {
        component: CheckboxIndeterminateIcon,
      },
    },
    Switch: {
      style: {
        borderRadius: 2,
        height: 18,

        color: 'white',
        bg: 'gray8',
        bgActive: 'gray12',
        bgDisabled: 'gray4',
      },
      shape: {
        circle: {
          style: {
            p: 1,
            height: 20,
          },
        },
        square: {
          style: {
            mx: 1,
          },
        },
      },
      checked: {
        style: {
          bgDisabled: 'gray28',
        },
        variant: dsl.styleMap({
          primary: {
            bg: 'blue500',
            bgActive: 'blue700',
          },
          secondary: {
            bg: 'gray48',
            bgActive: 'gray56',
          },
          success: {
            bg: 'green500',
            bgActive: 'green700',
          },
          warning: {
            bg: 'orange500',
            bgActive: 'orange700',
          },
          error: {
            bg: 'red500',
            bgActive: 'red700',
          },
        }),
      },
    },
  },
}
