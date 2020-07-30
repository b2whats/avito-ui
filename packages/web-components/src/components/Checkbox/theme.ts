import { CheckboxTheme, dsl } from '@avito/core'
import { CheckboxCheckedIcon, CheckboxIndeterminateIcon } from '../Icon'

export const checkboxTheme = dsl.theme<CheckboxTheme>()
  .slot('Icon', {
    checked: {
      component: CheckboxCheckedIcon,
    },
    indeterminate: {
      component: CheckboxIndeterminateIcon,
    },
  })
  .slot('Switch', {
    style: {
      borderRadius: 3,
    },
    size: dsl.styleMap('height', {
      s: 16,
      m: 18,
      l: 22,
    }),
  })
  .build()
