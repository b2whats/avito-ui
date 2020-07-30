import { CheckboxTheme, dsl } from '@avito/core'
import { CheckboxCheckedIcon, CheckboxIndeterminateIcon } from '../Icon'

export const checkboxTheme = dsl.theme<CheckboxTheme>()
  .slot('Icon', slot => [
    slot.if('checked', {
      component: CheckboxCheckedIcon,
    }),
    slot.if('indeterminate', {
      component: CheckboxIndeterminateIcon,
    }),
  ])
  .slot('Switch', slot => ({
    style: {
      borderRadius: 3,
      color: 'white',
      height: slot.mapped('size', { s: 16, m: 18, l: 22 }),
    },
  }))
  .build()
