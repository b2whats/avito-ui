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
  .slot('Switch', slot => [
    {
      style: {
        borderRadius: 2,
        height: 18,
        bg: 'gray8',
        bgActive: 'gray12',
        color: 'white',
        bgDisabled: 'gray4',
      },
    },
    slot.if('checked', [
      {
        style: {
          bgDisabled: 'gray28',
        },
      },
      slot.switch('variant', dsl.styleMap({
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
      })),
    ]),
  ])
  .build()
