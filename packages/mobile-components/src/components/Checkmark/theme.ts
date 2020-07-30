import { ComponentTheme, Slot, IconProps, dsl } from '@avito/core'
import { CheckmarkIcon } from '../Icon'
import { CheckmarkProps } from './contract'

export type CheckmarkTheme = ComponentTheme<CheckmarkProps, { Icon: Slot<IconProps> }>

export const checkmarkTheme = dsl.theme<CheckmarkTheme>()
  .defaultProps({
    variant: 'primary',
  })
  .slot('Icon', slot => [
    {
      component: CheckmarkIcon,
    },
    slot.if('disabled', {
      props: {
        color: 'gray28',
      },
    }),
  ])
  .build()
