import { CheckboxTheme, DeepPartial, dsl } from '@avito/core'
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
        borderRadius: 3,
      },
      size: dsl.styleMap('height', {
        s: 16,
        m: 18,
        l: 22,
      }),
    },
  },
}
